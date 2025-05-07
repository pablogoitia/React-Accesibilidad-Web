import './ViewButton.css';

export default function ViewButton({ newVisibleCount, setVisibleCount, text }) {
  return (
    <div class="load-more">
      <a class="load-boton" onClick={() => setVisibleCount(newVisibleCount)}>
        {text}
      </a>
    </div>
  );
}