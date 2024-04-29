import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Global from '../../Global';
import axios from 'axios';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import Swal from 'sweetalert2';

const Article = () => {
  const [article, setArticle] = useState({});
  const params = useParams();
  const url = Global.url;
  const navigate = useNavigate();

  useEffect(() => {
    getArticle();
  }, []);
   
  const getArticle = async()=>{
    try {
      const articleA = await axios.get(url+'article/'+params.id);
      setArticle(articleA.data.article);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteArticle = (id) => {
    Swal.fire({
      title: "Eliminar articulo",
      text: "estas seguro de querer eliminar este articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url+'article/'+id).then(res => {
          setArticle(res.data.article);
          Swal.fire({
            title: "Eliminado!",
            text: "El articulo a sido eliminado correctamente.",
            icon: "success"
          });
          navigate("/blog");
        });
        
      }
    });
  }

  const editarArticle = (id)=>{
    navigate('/blog/editar/'+id);
  }

  return (
    <div className="center">
        <section id="content">
            <article className="article-item article-detail">
                <div className="image-wrap">
                        {article.image 
                            ? <img src={article.image} alt={article.title} />
                            : <img src="https://previews.123rf.com/images/badztua/badztua1201/badztua120100021/12008346-no-hay-se%C3%B1ales-de-fotograf%C3%ADa-con-el-texto-permite.jpg" alt="No hay imagen" />
                        }
                </div>
                <h1 className="subheader">{article.title}</h1>
                <span className="date">
                  <Moment fromNow>{article.date}</Moment>
                </span>
                <p>{article.content}</p>
                <button onClick={()=>deleteArticle(article._id)} className='btn btn-danger'>Eliminar</button>
                <button onClick={()=>editarArticle(article._id)} className='btn btn-warning'>Editar</button>
                <div className="clearfix"></div>
            </article>
        </section>
        <Sidebar />
        <div className="clearfix"></div>
    </div>
  )
}

export default Article