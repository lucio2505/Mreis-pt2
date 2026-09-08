import './Gallery.css'
import comida1 from '../../assets/home/galeria/comida1.jpg'
import comida2 from '../../assets/home/galeria/comida2.jpg'
import comida3 from '../../assets/home/galeria/comida3.jpg'
import comida4 from '../../assets/home/galeria/comida4.jpg'
import ensaio1 from '../../assets/home/galeria/ensaio1.jpg'
import ensaio2 from '../../assets/home/galeria/ensaio2.jpg'
import ensaio3 from '../../assets/home/galeria/ensaio3.jpg'
import ensaio4 from '../../assets/home/galeria/ensaio4.jpg'
import moda1 from '../../assets/home/galeria/moda1.jpg'
import moda2 from '../../assets/home/galeria/moda2.jpg'
import moda3 from '../../assets/home/galeria/moda3.jpg'
import moda4 from '../../assets/home/galeria/moda4.jpg'

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