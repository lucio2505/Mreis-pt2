import './Home.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Gallery from '../../components/Gallery/Gallery'
import banner from '../../assets/home-web/banner.webp'
import btnMarketing from '../../assets/home-web/servicos/btnMarketing.avif'
import btnTrafegopago from '../../assets/home-web/servicos/btnTrafegopago.webp'
import btnFotografia from '../../assets/home-web/servicos/btnFotografia.webp'


function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-text">
          <p>
            Desde criança, sempre fui apaixonada por fotografia. Com uma simples Cyber-shot nas mãos, eu me sentia a maior fotógrafa do mundo. E, de certa forma, era mesmo, registrava tudo ao meu redor como se cada momento fosse precioso demais para passar despercebido. Desde festas onde toda a familia estava reunida, a uma simples formiga. Os meus dias favoritos da infância eram aqueles em que parentes distantes vinham nos visitar. Como em um ritual, os álbuns fotográficos saíam de caixas empoeiradas e iam direto para a mesa da sala. Ali, entre risadas, lembranças e olhares emocionados, estavam as fotografia de momentos eternamente especiais, e até pessoas que já não estavam mais entre nós. Foi aí que entendi, a fotografia tem o poder de eternizar nossos sentimentos. Hoje, como fotógrafa, levo comigo essa essência. Acredito que a beleza está nos detalhes simples, nos sorrisos espontâneos, nos olhares sinceros e nos abraços que contam histórias. Minha fotografia tem um estilo minimalista, mas cheio de sentimento, porque mais do que imagens bonitas, eu quero entregar memórias verdadeiras. Se você valoriza o que é real, leve e cheio de emoção, será um prazer registrar sua história com todo o carinho que ela merece.
          </p>
        </div>
        <div className="home-hero-image">
          <img src={banner} alt="Banner" />
        </div>
        
      </section>

      <section className="home-services">
  <h2>Serviços</h2>

  <div className="home-services-grid">
    <ServiceCard
      title="Fotografia"
        href="/fotografia"
        image={btnFotografia}
    />

    <ServiceCard
      title="Marketing"
      href="/marketing"
      image={btnMarketing}
    />

    <ServiceCard
      title="Tráfego Pago"
      href="/trafego-pago"
      image={btnTrafegopago}
    />
  </div>
</section>

<section className="home-gallery">
  <h2>Galeria</h2>

  <Gallery />
</section>
    </main>
  )
}

export default Home