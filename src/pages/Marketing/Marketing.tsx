import { Link } from 'react-router-dom'
import MarketingProject from '../../components/MarketingProject/MarketingProject'
import './Marketing.css'

function Marketing() {
  return (
    <main className="marketing">
      <h1>Marketing</h1>

      <section className="marketing-intro">
        <p>
          O marketing ajuda sua empresa a se posicionar melhor, alcançar as pessoas certas e transformar presença em resultado. Com estratégias bem definidas, sua marca ganha mais visibilidade, fortalece sua identidade e cria conexões reais com o público. Veja alguns exemplos:
        </p>
      </section>

      <section className="marketing-projects">
        <MarketingProject
          imgAntes=""
          imgDepois=""
          name="Projeto 1"
  
        />

        <MarketingProject
         imgAntes=""
          imgDepois=""
          name="Projeto 2"
    
        />

        <MarketingProject
         imgAntes=""
          imgDepois=""
          name="Projeto 3"
        />
      </section>

      <Link className="contact-button" to="/contato">
        Entre em contato!
      </Link>
    </main>
  )
}

export default Marketing