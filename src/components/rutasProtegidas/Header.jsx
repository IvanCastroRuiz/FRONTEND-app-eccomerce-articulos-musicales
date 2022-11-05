import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import IconVeterinario from '../../assets/img/iconoVeterinario.jpg';

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };
    
    let activeClassName = "underline";

    const { auth, cerrarSesion } = useAuth();
    const { usuario } = auth;
    console.log(auth);

    const handleClick = (e) => {
        e.preventDefault();
        window.open('https://strapi-app-eccomerce-articulos.herokuapp.com/admin');
    };
   
    return (
        <header className="bg-cyan-600 font-bold mx-auto md:grid md:grid-cols-1"> 
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div>
                    {/* <div className="alings-center p-5">   
                        <img className="object-cover h-24 w-24" src={IconVeterinario} alt="IconVeterinario"/>
                    </div> */}
                </div>
                <div className="text-center">
                    <h1 className="text-black font-bold text-4xl uppercase">
                        ECA - Administrador de Articulos {" "}
                        <span className="text-white font-black" >Musicales</span> 
                    </h1>
                    <div>
                    { 
                        usuario?._id 
                                    ? 
                                        <h4 className="text-white font-black text-sm uppercase">{usuario.nombre} - {usuario.email} - {usuario.rol}</h4> 
                                    :   
                                        <h4 className="text-white font-black text-sm uppercase">No</h4> 
                    }
                    </div>
                </div>
                <div className="flex justify-between p-2">
                    <nav className="flex flex-col lg:flex-row gap-4 mt-5 lg:mt-0  items-center alings-center">

                        <NavLink 
                            to="/admin" 
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            end 
                        >
                            Usuario
                        </NavLink>
                        
                        <NavLink 
                            to="/admin/perfil" 
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                                Perfil
                        </NavLink>

                        <NavLink 
                            to="lista-articulo"
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Lista Articulos
                        </NavLink>

                        <NavLink 
                            to="lista-articulo"
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Gestion ventas
                        </NavLink>

                        <NavLink 
                            to="https://strapi-app-eccomerce-articulos.herokuapp.com/admin" 
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            onClick={handleClick}
                        >
                           Administrar Contenido
                        </NavLink>
                    
                        <NavLink 
                            to="lista-articulo"
                            className="text-white text-sm uppercase font-bold"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >    
                            <button
                                type="button"
                                className="text-white text-sm uppercase font-bold"
                                onClick={cerrarSesion}
                            >
                                Cerrar Sesion
                            </button>   
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
  }
  
  export default Header