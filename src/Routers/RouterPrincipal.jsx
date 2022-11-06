import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter  } from "react-router-dom";
import Api from '../Pages/Api';
import Contacto from '../Pages/Contacto';
import Detalle from '../Pages/Detalle';
import Home from '../Pages/Home';
import {routes} from './routes'


function RouterPrincipal() {
  return (
    <Router>
        {/* Titulo o Cabecera de la pagina */}
        <h1>Practica de Api</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio"
                    //hacemos un callBack y destrusturamos un objeto
                     className={ (datos) =>{
                        const isActivado = datos.isActive;
                        return isActivado ? "activo" : ""
                     }}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/Api"
                    className={ (datos) =>{
                        // console.log(datos);
                        const isActivado = datos.isActive;
                        return isActivado ? "activo" : ""
                     }}>Api</NavLink>
                </li>
                <li>
                    <NavLink to="/detalle"
                    className={ (datos) =>{
                        const isActivado = datos.isActive;
                        return isActivado ? "activo" : ""
                     }}>Detalle</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto"className={ (datos) =>{
                        const isActivado = datos.isActive;
                        return isActivado ? "activo" : ""
                     }}>Ejercicio N6</NavLink>
                </li>
                {routes.map((ruta, index) =>(
                    <li key={index}>
                    <NavLink to={ruta.path}
                    className={ (datos) =>{
                        // console.log(datos);
                        const isActivado = datos.isActive;
                        return isActivado ? "activo" : ""
                     }}>{ruta.name}
                     </NavLink>
                </li>
                ))}
            </ul>
        </nav>
             {/* {Rutas}  */}
        <Routes>
            <Route path='/Inicio' element={<Home/>}/>
            <Route path='/Contacto' element={<Contacto/>} />
            <Route path='/Api' element={<Api/>} />
            {/* Al darle los : hago que la route sea dinamica, por medio de useParams traigo los parametros
            los params sirven para pasar el id y filtrandola ya mostrarmos el detalle de ese producto
            en especifico */}
            <Route path='/detalle/:nombre/:apellido' element={<Detalle/>} />
            <Route path='/*' element={<>Error 404</>} />

            
        </Routes>
    
    </Router>

  )
}

export default RouterPrincipal