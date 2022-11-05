import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';

const DetalleArticulo = () => {

 const params = useParams();
 const { id } = params;

 const [ articulo, setArticulo ] = useState({});
 const [ spinner, setSpinner ] = useState(true);

 useEffect( () =>{
    const consultarApi = async () =>{
      try {
  
          let respuesta =  await fetch(`${import.meta.env.VITE_BACKEND_URL_STRAPI}/articulos/${id}`);
          //let respuesta =  await fetch("http://localhost:3000/articulos");
          //let respuesta =  await fetch("../src/assets/articulos.json");
          const resultado = await respuesta.json();
          setArticulo(resultado);
  
      } catch (error) {
          console.log("Error: " + error.message);
      }
    };
    consultarApi();
  }, []);   

  const { _id, nombre, descripcion, precio, imagen, tipo} = articulo

  return (
    <>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

            {
                spinner 
                ?
                  <Spinner
                    spinner={Spinner}
                    setSpinner={setSpinner}
                  />
                :
                    <>
                        <div className="flex flex-col md:flex-row">

                            {
                                _id
                                    ?
                                    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                                        <h1 className="font-bold tracking-tight text-gray-900">{nombre}</h1>
                                        <div className="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                            <div className="border-2 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                    <img
                                                        src={imagen.url}
                                                        alt={nombre}
                                                        className="object-containt h-100 w-220 m-auto"
                                                    />
                                            </div>
                                            <p className="mt-4 text-6xl text-center text-gray-900">$ {precio}</p>
                                            <p className="mt-4 text-xxl text-justify text-gray-900"> <strong>Categoria:</strong> {" "} {tipo}</p>
                                            <p className="mt-4 text-xxl text-justify text-gray-900"> {descripcion}</p>
                                        </div>

                                        <div className="p-6 align-bottom">
                                            <Link
                                                className="btn bg-cyan-600 text-center text-3xl text-slate-200 font-bold"
                                                to="/admin/lista-articulo"
                                            >
                                                Regresa a listado de articulos
                                            </Link>
                                        </div>

                                    </div>       
                                    :
                                        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                                            <p>
                                                Cargando informacion ..........
                                            </p>
                                        </div>
                            }
                                    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                                        <h1 className="text-cyan-600 font-black text-6xl">Vamos a crear un Blog {" "}<span className="text-black">En construccion</span></h1>
                                    </div>
                        </div>
                    </>
            }
        </div>
    </>
  )
}

export default DetalleArticulo
