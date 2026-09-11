import './Gallery.css'
import comida1 from '../../assets/home-web/galeria/comida1.webp'
import comida2 from '../../assets/home-web/galeria/comida2.webp'
import comida3 from '../../assets/home-web/galeria/comida3.webp'
import comida4 from '../../assets/home-web/galeria/comida4.webp'
import ensaio1 from '../../assets/home-web/galeria/ensaio1.webp'
import ensaio2 from '../../assets/home-web/galeria/ensaio2.webp'
import ensaio3 from '../../assets/home-web/galeria/ensaio3.webp'
import ensaio4 from '../../assets/home-web/galeria/ensaio4.webp'
import moda1 from '../../assets/home-web/galeria/moda1.webp'
import moda2 from '../../assets/home-web/galeria/moda2.webp'
import moda3 from '../../assets/home-web/galeria/moda3.webp'
import moda4 from '../../assets/home-web/galeria/moda4.webp'

function Gallery() {
  const photos = [
   {src: comida1, alt: 'Comida 1'},
    {src: comida2, alt: 'Comida 2'},
    {src: comida3, alt: 'Comida 3'},
    {src: comida4, alt: 'Comida 4'},
    {src: ensaio1, alt: 'Ensaio 1'},
    {src: ensaio2, alt: 'Ensaio 2'},
    {src: ensaio3, alt: 'Ensaio 3'},
    {src: ensaio4, alt: 'Ensaio 4'},
    {src: moda1, alt: 'Moda 1'},
    {src: moda2, alt: 'Moda 2'},
    {src: moda3, alt: 'Moda 3'},
    {src: moda4, alt: 'Moda 4'}
  ]

  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <div className="gallery-item" key={photo.src}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}

export default Gallery