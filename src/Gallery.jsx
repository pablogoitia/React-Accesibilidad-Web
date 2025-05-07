import './Gallery.css'
import { animales } from './Animales.jsx'
import { useState } from 'react';
import CallToAction from './CallToAction.jsx';
import ViewButton from './ViewButton.jsx';
import Animal from './AnimalCard.jsx';

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>Galería de animales</h1>
      </div>
      <div className="gallery-container">
        {animales.slice(0, visibleCount).map((animal, index) => (
          <Animal
            key={index}
            className={index >= 4 ? "animal new-animal" : "animal"}
            nombre={animal.nombre}
            nombreCientifico={animal.nombreCientifico}
            wikiURL={animal.wikiURL}
            imagen={animal.imagen}
            descripcion={animal.descripcion}
          />
        ))}
      </div>
      {visibleCount < animales.length ? (
        <ViewButton newVisibleCount={visibleCount + 4} setVisibleCount={setVisibleCount} text={"Mostrar más +"} />
      ) : (
        <ViewButton newVisibleCount={4} setVisibleCount={setVisibleCount} text={"Colapsar vista"} />
      )}
      <CallToAction />
    </div>
  );
}
