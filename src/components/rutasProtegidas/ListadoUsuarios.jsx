import { useEffect, useState } from 'react';
// import useUsuarios from '../../hooks/useUsuarios';
import Usuario from './Usuario';
import clienteAxios from '../../config/axios';

const ListadoUsuarios = () => {

    const [usuarios, setUsuarios ] = useState([]);

    useEffect(()=>{
        const obtenerUsuarios = async () =>{
            try{
                const token = localStorage.getItem('token');
                if(!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };
                const { data } = await clienteAxios('/usuarios/lista-usuarios', config);
                setUsuarios(data);
                // console.log(data);
            } catch (error){
                console.log(error);
            }
        }
        obtenerUsuarios();
    },[]);

    return (
        <>
            { usuarios.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Usuarios</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Usuarios</span>
                    </p>

                    {usuarios.map( usuario => (
                        <Usuario 
                            key={usuario._id}
                            usuario={usuario}
                        />
                    ))}
                </>
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Usuarios</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando usuarios {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
  }
  
  export default ListadoUsuarios