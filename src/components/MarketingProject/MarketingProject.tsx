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
      <span>{name}</span>
        <div className="imgAnteseDepois">

  <div className="marketing-project-item">
    <div className="marketing-project-image">
          <img
            src={imgAntes}
            alt={`${name} antes do trabalho de marketing`}
          />
        </div>

        <span>Antes</span>
      </div>

      <div className="marketing-project-item">
        <div className="marketing-project-image">
          <img
            src={imgDepois}
            alt={`${name} depois do trabalho de marketing`}
          />
        </div>

        <span>Depois</span>
      </div>

</div>
      
    </a>
  )
}

export default MarketingProject