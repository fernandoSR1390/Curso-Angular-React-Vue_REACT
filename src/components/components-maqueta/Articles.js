import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import React, { useEffect, useState } from 'react';
import Global from '../../Global';
import { Link } from 'react-router-dom';

const Articles = ({home, search}) => {
    
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('fail');
  let url=Global.url;

  useEffect(() => {
    return () => {
      if (home) {
        getArticlesLast();
      } else {
        if (search && search != null && search !== undefined) {
          getArticlesSearch(search);
        } else {
          getArticles();
        }
      }
    };
  }, [home, search])

  const getArticles = async()=>{
    try {
      const articlesA = await axios.get(url+"articles");
      setStatus('success');
      setArticles(articlesA.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  const getArticlesLast = async()=>{
    try {
      const articlesA = await axios.get(url+"articles/last");
      setStatus('success');
      setArticles(articlesA.data.articles);
    } catch (error) {
      console.log(error) 
    }  
  }

  const getArticlesSearch = async(searched)=>{
    try {
      const articlesA = await axios.get(url+"search/"+searched);
      setStatus('success');
      setArticles(articlesA.data.articles);
    } catch (error) {
      setArticles([]);
      setStatus('success');
      console.log(error)
    } 
  }
  
  return (
    articles.length > 0 
    ? (
        <div id='articles'>
          <h1 className='subheader'>Lista de Articulos: {articles.length > 0 ? articles.length : ''}</h1>
          {(articles.map((article, i)=>{
              return (
                <article className="article-item" id="article-template" key={i}>
                    <div className="image-wrap">
                        {article.image 
                            ? <img src={article.image} alt={article.title} />
                            : <img src="https://previews.123rf.com/images/badztua/badztua1201/badztua120100021/12008346-no-hay-se%C3%B1ales-de-fotograf%C3%ADa-con-el-texto-permite.jpg" alt="No hay imagen" />
                        }
                    </div>
                    <h2 id="h2-item">{article.title}</h2>
                    <span className="date">
                        <Moment fromNow>{article.date}</Moment>
                    </span>
                    <Link to={'/blog/articulo/'+article._id}>Leer mas</Link>
                    <div className="clearfix"></div>
                </article>
              )
          }))}
        </div>
      )
    : articles.length === 0 && status === 'success'
      ? (
          <div id='articles'>
            <h2 className='subheader'>No hay articulos para mostrar</h2>
            <p>Todavia no hay contenido en esta seccion</p>
          </div>
        ) 
      : (
          <div id='articles'>
            <h2 className='subheader'>Cargando....</h2>
            <p>Espere mientras carga el contenido</p>
          </div>
        )
  )
}

export default Articles