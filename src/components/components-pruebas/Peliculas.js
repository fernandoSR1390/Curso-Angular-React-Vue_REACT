import { useState } from "react";
import Pelicula from "./Pelicula";
import Slider from "../components-maqueta/Slider";
import Sidebar from "../components-maqueta/Sidebar";

function Peliculas() {
  const listaPeliculas = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        año: "13-02-2023",
        image:
          "https://proyectorfantasma.com.ar/wp-content/uploads/2015/04/Batman-Vs-Superman-portada-1280x720.jpg",
      },
      {
        titulo: "Gran Torino",
        año: "03/04/2022",
        image:
          "https://m.media-amazon.com/images/S/pv-target-images/245e86acb724e0fe74cf8acd6b97dbbe8167ab9d412a1d75e9348557c0095a43.jpg",
      },
      {
        titulo: "Looper",
        año: "09/04/2021",
        image:
          "https://cdn.sincroguia.tv/uploads/programs/l/o/o/looper-273168_SPA-88.jpg",
      },
      {
        titulo: "Avengers endGame",
        año: "20/04/2023",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp",
      },
    ],
    nombre: "Fernando Salinas Romero",
  };
  const [favorito, setFavorito] = useState("");

  const onClickFavorito = (peliculaF) => {
    setFavorito(peliculaF.titulo);
  };
  return (
    <div id="Peliculas">
      <Slider title="Peliculas" size="slider-small" />
      <div className="center">
        <div id="content">
          <h2 className="subheader">Peliculas</h2>
          <p>Seleccion de peliculas favoritas de {listaPeliculas.nombre}</p>
          {favorito && (
            <p
              className="favorito"
              style={{
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "1% 0%",
              }}
            >
              <strong>La pelicula favorita es: </strong>
              <span>{favorito}</span>
            </p>
          )}
          <div id="article" className="peliculas">
            {listaPeliculas.peliculas.map((pelicula, i) => {
              return (
                <Pelicula
                  key={i}
                  pelicula={pelicula}
                  marcarFavorito={onClickFavorito}
                />
              );
            })}
          </div>
        </div>
        <Sidebar blog={true} />
      </div>
    </div>
  );
}

export default Peliculas;
