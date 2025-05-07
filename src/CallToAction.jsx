import './CallToAction.css';

export default function CallToAction() {
  return (
    <div className="call-to-action">
      <p className="cta-text">¿Has echado algo en falta?</p>
      <p className="cta-subtext">
        Déjanos tu{' '}
        <abbr title="Opinión, retroalimentación.">feedback</abbr>.
      </p>
      <a className="cta-boton" href="#">
        Ir al formulario
      </a>
      <p>
        Procesaremos la información de tu petición de acuerdo a las directrices del{' '}
        <abbr title="Reglamento General de Protección de Datos">RGPD</abbr>.
      </p>
    </div>
  );
}