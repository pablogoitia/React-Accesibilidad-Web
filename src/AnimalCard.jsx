import './AnimalCard.css'

export default function Animal({ nombre, nombreCientifico, wikiURL, imagen, descripcion, className }) {
  const truncatedDescripcion = descripcion.length > 158 
    ? descripcion.substring(0, 158) + "... " 
    : descripcion;

  return (
    <div className={className}>
      <img className="animal-img"
        src={imagen}
        alt={nombre + " (" + nombreCientifico + ")"}
      />
      <div className="animal-info">
        <h2 className="animal-nombre">{nombre}</h2>
        <a href={wikiURL} target="_blank" rel="noopener noreferrer">
          <h3 className="animal-nombreCientifico">({nombreCientifico})</h3>
        </a>
        <p className="animal-desc">
          {truncatedDescripcion}
          {descripcion.length > 158 && (
            <a className="animal-mostrar-mas" href={wikiURL} target="_blank" rel="noopener noreferrer">
              Mostrar más
            </a>
          )}
        </p>
        <a className="animal-boton animal-wiki" href={wikiURL} target="_blank" rel="noopener noreferrer">
          Más información
        </a>
        <a className="animal-boton animal-ubi" href="https://maps.app.goo.gl/J44X2nbRHpZLkBf59" target="_blank" rel="noopener noreferrer">
          Ver ubicación
        </a>
      </div>
    </div>
  )
}