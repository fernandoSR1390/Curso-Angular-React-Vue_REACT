import moment from "moment";
import { Link } from "react-router-dom";
moment.locale("es");

function Pelicula({ pelicula, marcarFavorito }) {
  return (
    <article className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={pelicula.image} alt={pelicula.titulo} />
      </div>
      <h2 id="h2-item">{pelicula.titulo}</h2>
      <span className="date">{pelicula.año}</span>
      <Link to={'/blog'}>Leer mas</Link>
      <button
        onClick={() => {
          marcarFavorito(pelicula);
        }}
      >
        Marcar como favorita
      </button>
      <div className="clearfix"></div>
    </article>
  );
}

export default Pelicula;
