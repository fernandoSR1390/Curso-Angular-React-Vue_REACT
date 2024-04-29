import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Global from "../../Global";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert2';

const CreateArticle = () => {
  const url = Global.url;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState({ article: [], status: "" });
  //const validator = new SimpleReactValidator();

  const [validator, setValidator] = useState();

  const saveArticle = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      let objetForm = {
        title: title,
        content: content,
        image: "",
      };

      Swal.fire({
        title: selectedFile === null ? "Quieres guardar los datos, sin imagen?" : "Quieres guardar los datos?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios.post(url + "save", objetForm).then((res) => {
            if (res.data.article) {
              setResponse({ article: res.data.article, status: "waiting" });
              //subir la imagen
              if (selectedFile !== null) {
                //sacar el id del articulo guardado
                let articleId = res.data.article._id;
                //crear from data y añadir fichero
                let formData = new FormData();
                formData.append('file0', selectedFile, selectedFile.name);
                //peticion ajax
                if (formData) {
                  axios.post(url + "upload-image/" + articleId, formData).then((res) => {
                    if (res.data.article) {
                      setResponse({ article: res.data.article, status: "success" });
                      navigate("/blog");
                    } else {
                      setResponse({ article: [], status: "failed" });
                    }
                  });
                }
              } else {
                setResponse({ article: [], status: "failed" });
              }
              Swal.fire("Articulo Creado!", "", "success");
              navigate("/blog");
            } else {
              setResponse({ article: [], status: "failed" });
            }
          });
        } else if (result.isDenied) {
          setSelectedFile(null);
          Swal.fire("Los cambios no se guardaron", "", "info");
        }
      });
    } else {
      setResponse({ article: [], status: "failed" });
      validator.showMessages();
    }
  };

  const fileChange = (e) => {
    console.log(e.target.files[0])
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    setValidator(new SimpleReactValidator({
      messages: {
        required: 'Este campo es requerido.',
        default: 'El título sólo puede contener letras, números y espacios'
      },
    }));
  }, [])

  return (
    <div className="center">
      <section id="content">
        <h1 className="sbheader">Crear Articulo</h1>
        <p>
          titulo: <strong>{title}</strong><br></br>
          status: {response ? response.status : ""}
        </p>
        <form className="mid-form" onSubmit={saveArticle}>
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              name="title"
              onChange={(e) => {setTitle(e.target.value); validator.showMessages();}}
              value={title}
            />
            {validator ? validator.message('title', title, 'required|alpha_num_space') : ''}
          </div>

          <div className="form-group">
            <label htmlFor="content">Cotenido</label>
            <textarea
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></textarea>
            {validator ? validator.message('content', content, 'required|alpha_num_space') : ''}
          </div>

          <div className="form-group">
            <label htmlFor="title">Imagen</label>
            <input type="file" name="file0" onChange={(e) => fileChange(e)} />
            {/* <div className="container-body">
              <DragAndDrop />
            </div> */}
          </div>
          <input type="submit" value={"Guardar"} className="btn btn-success" />
        </form>
      </section>
      <Sidebar />
    </div>
  );
};

export default CreateArticle;
