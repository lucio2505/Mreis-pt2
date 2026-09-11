import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const inputRoot = path.resolve('src/assets/home')
const outputRoot = path.resolve('src/assets/home-web')

const validExtensions = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG']

async function processDirectory(directory) {
  const files = await fs.readdir(directory, { withFileTypes: true })

  for (const file of files) {
    const fullPath = path.join(directory, file.name)

    if (file.isDirectory()) {
      await processDirectory(fullPath)
      continue
    }

    const extension = path.extname(file.name)

    if (!validExtensions.includes(extension)) {
      continue
    }

    const relativePath = path.relative(inputRoot, fullPath)

    const outputPath = path.join(
      outputRoot,
      relativePath.replace(/\.(jpe?g|png)$/i, '.webp')
    )

    await fs.mkdir(path.dirname(outputPath), {
      recursive: true,
    })

    console.log(`Processando: ${relativePath}`)

    await sharp(fullPath)
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
      })
      .toFile(outputPath)

    console.log(`Convertida: ${relativePath}`)
  }
}

await processDirectory(inputRoot)

console.log('Imagens otimizadas com sucesso!')