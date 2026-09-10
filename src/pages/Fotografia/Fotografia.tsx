import { useState } from 'react'
import { photographyData } from '../../data/photographyData'
import { Link } from 'react-router-dom'
import './Fotografia.css'
import btnAniversario from '../../assets/fotografia/btnAniversario.jpg'
import btnEnsaio from '../../assets/fotografia/btnEnsaio.jpg'
import btnGastronomico from '../../assets/fotografia/btnGastronomico.jpg'
import btnModa from '../../assets/fotografia/btnModa.jpg'


type Category = keyof typeof photographyData

function Fotografia() {
  const [category, setCategory] = useState<Category>('ensaio')

  const photos = photographyData[category]

  return (
    <main className="fotografia">
      <h1>Fotografia</h1>
           
      <div className="fotografia-categories">
        <button
          className={`category-button ${category === 'ensaio' ? 'active' : ''}`}
          onClick={() => setCategory('ensaio')}
        >
          <div className="category-image">
            <img src={btnEnsaio} alt="Ensaio Fotográfico" />
          </div>
          <span>Ensaio Fotográfico</span>
        </button>

        <button
          className={`category-button ${category === 'aniversario' ? 'active' : ''}`}
          onClick={() => setCategory('aniversario')}
        >
          <div className="category-image">
            <img src={btnAniversario} alt="Aniversário" />
          </div>
          <span>Aniversário</span>
        </button>

        <button
          className={`category-button ${category === 'moda' ? 'active' : ''}`}
          onClick={() => setCategory('moda')}
        >
          <div className="category-image">
            <img className="moda" src={btnModa} alt="Moda" />
          </div>
          <span>Moda</span>
        </button>

        <button
          className={`category-button ${category === 'gastronomico' ? 'active' : ''}`}
          onClick={() => setCategory('gastronomico')}
        >
          <div className="category-image">
            <img className="gastronomico" src={btnGastronomico} alt="Gastronômico" />
          </div>
          <span>Gastronômico</span>
        </button>
      </div>

      <div className="fotografia-gallery" key={category}>
        {photos.map((photo) => (
          <div className="fotografia-photo" key={photo.alt}>
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} />
              ) : (
                <div>
              {photo.alt}
                </div>
              )}
          </div>
        ))}
      </div>

      

      <Link className="contact-button" to="/contato">
        Entre em contato!
      </Link>
    </main>
  )
}

export default Fotografia