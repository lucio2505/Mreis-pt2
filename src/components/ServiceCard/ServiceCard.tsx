import './ServiceCard.css'


type ServiceCardProps = {
  title: string
  href: string
  image: string
}

function ServiceCard({ title, href, image }: ServiceCardProps) {
  return (
    <a className="service-card" href={href}>
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
    </a>
  )
}

export default ServiceCard