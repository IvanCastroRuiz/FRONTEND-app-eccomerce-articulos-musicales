import { useState, useEffect }  from 'react'

import Spinner from '../components/Spinner';
import Articulo from '../pages/Articulo';

const ListaProductos = () => {


  const [ spinner, setSpinner ] = useState(true);
  const [ consulta, setConsulta] = useState([]);
  
  useEffect( () =>{
    const consultarApi = async () =>{
      try {
  
          let respuesta =  await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras");
          //let respuesta =  await fetch("http://localhost:3000/articulos");
          //let respuesta =  await fetch("../src/assets/articulos.json");
          const resultado = await respuesta.json();
          setConsulta(resultado);
  
      } catch (error) {
          console.log("Error: " + error.message);
      }
    };
    consultarApi();
  }, []);


  return (
    <>

        <div>
          <h1 className="text-cyan-600 font-black text-6xl">Tenemos mucha variedad de {" "}<span className="text-black">Articulos Musicales</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
              {
                spinner 
                        ?
                          <Spinner
                            spinner={Spinner}
                            setSpinner={setSpinner}
                          />
                        :
                          consulta.length > 0
                                        ? 
                                          <div className="bg-white">
                                            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                              <h1 className="font-bold tracking-tight text-gray-900">Listado Articulos</h1>
                                              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                                  {
                                                    consulta.map( (producto) => (
                                                        <Articulo
                                                          key={producto._id}
                                                          producto={producto}
                                                        />
                                                    ))
                                                  }
                                              </div>
                                            </div>
                                          </div>
                                        :
                                          <p>Cargando el listado de productos...</p>                  
              }
        </div>
    </>
  )
}

export default ListaProductos