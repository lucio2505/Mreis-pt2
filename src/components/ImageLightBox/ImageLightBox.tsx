import './ImageLightBox.css'

type ImageLightBoxProps = {
  src: string
  alt: string
  onClose: () => void
}

function ImageLightBox({ src, alt, onClose }: ImageLightBoxProps) {
  return (
    <div className="lightbox" onClick={onClose}>
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fechar imagem"
      >
        ×
      </button>

      <img
        src={src}
        alt={alt}
        className="lightbox-image"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}

export default ImageLightBox