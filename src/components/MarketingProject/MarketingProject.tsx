import './MarketingProject.css'

type MarketingProjectProps = {
  name: string
  imgAntes: string
  imgDepois: string
}

function MarketingProject({ name, imgAntes, imgDepois }: MarketingProjectProps) {
  return (
    <a
      className="marketing-project"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="imgAnteseDepois">
        <div className="marketing-project-image">
          <span>Antes</span>
        </div>
        <div className="marketing-project-image">
          <span>Depois</span>
        </div>
      </div>
      <span>{name}</span>
    </a>
  )
}

export default MarketingProject