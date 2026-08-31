import { Link } from 'react-router-dom'
import './TrafegoPago.css'

function TrafegoPago() {
  return (
    <main className="trafego-pago">
      <h1>Tráfego Pago</h1>

      <section className="trafego-banner">
        <div className="trafego-grafico">
          Gráfico
        </div>

        <div className="trafego-imagem">
          Imagem
        </div>
      </section>

      <section className="trafego-texto">
        <p>
          Texto explicativo sobre os serviços de tráfego pago será inserido aqui.
        </p>
      </section>

      <Link className="trafego-contato" to="/contato">
        Entre em contato!
      </Link>
    </main>
  )
}

export default TrafegoPago