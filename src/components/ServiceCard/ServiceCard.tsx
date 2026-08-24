import './ServiceCard.css'

type ServiceCardProps = {
  title: string
  href: string
}

function ServiceCard({ title, href }: ServiceCardProps) {
  return (
    <a className="service-card" href={href}>
      <div className="service-card-image">
        Imagem
      </div>

      <h3>{title}</h3>
    </a>
  )
}

export default ServiceCard