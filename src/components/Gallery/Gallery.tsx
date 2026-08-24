import './Gallery.css'

function Gallery() {
  const photos = [
    'Foto 1',
    'Foto 2',
    'Foto 3',
    'Foto 4',
    'Foto 5',
    'Foto 6',
    'Foto 7',
    'Foto 8',
    'Foto 9',
    'Foto 10',
    'Foto 11',
    'Foto 12',
  ]

  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <div className="gallery-item" key={photo}>
          {photo}
        </div>
      ))}
    </div>
  )
}

export default Gallery