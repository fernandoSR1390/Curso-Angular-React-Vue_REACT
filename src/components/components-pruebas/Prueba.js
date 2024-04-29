import React from "react";
import { useParams } from "react-router-dom";
import { Title } from "./subir-imagen/Title";
import DragAndDrop from "./subir-imagen/DragAndDrop";
//import "./subir-imagen/css/styles-imagen.css";

const Prueba = () => {
  const params = useParams();

  return (
    <div>
      <h1 className="subheader">Pagina de pruebas: {params.id}</h1>
      <hr style={{ border: "3px solid red" }} />
      <h1 className="subheader">Subir Imagenes</h1>
      <div className="container-body">
        <div className="container-grid">
          <Title />
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
};

export default Prueba;
