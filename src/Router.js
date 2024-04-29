import { Component } from "react";
import Error from "./components/components-maqueta/Error";
import Header from "./components/components-maqueta/Header";
import Footer from "./components/components-maqueta/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./components/components-pruebas/Prueba";
import Home from "./components/components-maqueta/Home";
import Blog from "./components/components-maqueta/Blog";
import Peliculas from "./components/components-pruebas/Peliculas";
import Formulario from "./components/components-maqueta/Formulario";
import Article from "./components/components-maqueta/Article";
import Search from "./components/components-maqueta/Search";
import CreateArticle from "./components/components-maqueta/CreateArticle";
import EditArticle from "./components/components-maqueta/EditArticle";

class Router extends Component {

    render() { 
        return ( 
            <>
            {/* CONFIGURAR RUTAS Y PAGINAS */}
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/blog/busqueda/:search" element={<Search />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/blog/articulo/:id" element={<Article />} />
                    <Route exact path="/formulario" element={<Formulario />} />
                    <Route exact path="/blog/crear" element={<CreateArticle />} />
                    <Route exact path="/blog/editar/:id" element={<EditArticle />} />
                    <Route exact path="/peliculas" element={<Peliculas />} />
                    <Route element={<Error />} />
                    <Route exact path="/pruebas/:id" element={<Prueba />}/>
                </Routes>
                <div className='clearfix'></div>
                <Footer />   
            </BrowserRouter>
            </> 
        );
    }
}
 
export default Router;