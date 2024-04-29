import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({blog}) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const redirectToSearch = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            navigate('/blog/busqueda/'+search);
            setSearch('');
        }
    }

  return (
    <aside id="sidebar">
        {blog &&
            <div id="nav-blog" className="sidebar-item">
                <h3>Puedes hacer esto</h3>
                <Link to={'/blog/crear'} className="btn btn-success">Crear articulo</Link>
            </div> 
        }
        <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el articulo que buscas</p>
            <form onSubmit={redirectToSearch}>
                <input type="text" name="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <input type="submit" name="submit" value="Buscar" className="btn"/>
            </form>
        </div>
    </aside>
  )
}

export default Sidebar
