import React, { Component } from 'react';
import logo from '../../assets/images/React-icon.png'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <header id="header">
                <div className="center">
                    {/* <!-- LOGO --> */}
                    <div id="logo">
                        <NavLink to={'/home'}>
                            <img src={logo} alt="LogoTipo" className="app-logo" />
                            <span id="brand">
                                <strong>Curso</strong>React
                            </span>
                        </NavLink>
                    </div>
                    
                    {/* <!-- MENU --> */}
                    <nav id="menu">
                        <ul>
                            <li><NavLink to={'/home'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }>Inicio</NavLink>
                            </li>
                            <li><NavLink to={'/blog'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }>Blog</NavLink>
                            </li>
                            <li><NavLink to={'/formulario'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }>Formulario</NavLink>
                            </li>
                            <li><NavLink to={'/peliculas'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }>Peliculas</NavLink>
                            </li>
                            <li><NavLink to={'/pruebas/2234'} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }>Pagina</NavLink>
                            </li>
                        </ul>
                    </nav>
                   {/*  <!-- LIMPIAR FLOTADOS --> */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;