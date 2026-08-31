import { Link } from 'react-router-dom'
import MarketingProject from '../../components/MarketingProject/MarketingProject'
import './Marketing.css'

function Marketing() {
  return (
    <main className="marketing">
      <h1>Marketing</h1>

      <section className="marketing-intro">
        <p>
          Texto sobre os serviços de marketing será inserido aqui.
        </p>
      </section>

      <section className="marketing-projects">
        <MarketingProject
          name="Projeto 1"
          url="https://instagram.com/"
        />

        <MarketingProject
          name="Projeto 2"
          url="https://instagram.com/"
        />

        <MarketingProject
          name="Projeto 3"
          url="https://instagram.com/"
        />
      </section>

      <Link className="marketing-contact-button" to="/contato">
        Entre em contato!
      </Link>
    </main>
  )
}

export default Marketing