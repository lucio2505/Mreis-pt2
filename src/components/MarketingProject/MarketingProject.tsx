import './MarketingProject.css'

type MarketingProjectProps = {
  name: string
  url: string
}

function MarketingProject({ name, url }: MarketingProjectProps) {
  return (
    <a
      className="marketing-project"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="marketing-project-image">
        Imagem
      </div>

      <span>{name}</span>
    </a>
  )
}

export default MarketingProject