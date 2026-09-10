import { Link } from 'react-router-dom'
import './TrafegoPago.css'

function TrafegoPago() {
  return (
    <main className="trafego-pago">
      <h1>Tráfego Pago</h1>

        <div className="trafego-grafico">
          Gráfico
        </div>


      <section className="trafego-texto">
        <p>
          O tráfego pago ajuda sua empresa a alcançar mais pessoas de forma estratégica e rápida. Por meio de anúncios direcionados, é possível atrair o público certo, gerar mais oportunidades e transformar investimento em resultados mensuráveis.
        </p>
      </section>

      <Link className="contact-button" to="/contato">
        Entre em contato!
      </Link>
    </main>
  )
}

export default TrafegoPago