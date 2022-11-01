import { useState,useEffect } from 'react'
import Alerta from '../Alerta';
import useUsuarios from '../../hooks/useUsuarios';

const Formulario = () => {

    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    //const [ fecha, setFecha ] = useState(Date.now());
    const [ fecha, setFecha ] = useState('');
    const [ sintomas, setSintomas ] = useState('');
    const [ id, setId ] = useState(null);

    const [ alerta, setAlerta ] = useState({});

    const { usuario, guardarUsuario } = useUsuarios();

    useEffect(()=>{
      if(usuario?.nombre){
        setNombre(usuario.nombre);
        setPropietario(usuario.propietario);
        setEmail(usuario.email);
        setFecha(usuario.fecha);
        setSintomas(usuario.sintomas);
        setId(usuario._id);
      }
    }, [usuario])
    
    const handleSudmit = e =>{
      e.preventDefault();
      if([nombre, propietario, email, fecha, sintomas].includes('')){
        setAlerta({msg: "Todo los campos son obligatorios", error: true});
        return;
      };
      
      guardarUsuario({nombre, propietario, email, fecha, sintomas, id});
      setAlerta({
        msg: "Guardado Correctamente"
      });
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
      setId("");

      setTimeout(() => {
        setAlerta({});
      }, 3000);
    };

    const { msg } = alerta;

    return (
      <>

        <h2 className="font-black text-3xl text-center">Administrador de Usuarios</h2>

        <p className="text-xl mt-5 mb-10 text-center">
          Añade tus usuarios y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        

        {/* <form
          className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
          onSubmit={handleSudmit}
        
        >
          <div className="mb-5">
            <label  
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre Mascota
            </label>   

            <input
              id="nombre"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={ e => setNombre(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="propietario"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre Propietario
            </label>   

            <input
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={ e => setPropietario(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >
              Email Propietario
            </label>   

            <input
              id="email"
              type="text"
              placeholder="Email del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ e => setEmail(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="fecha"
              className="text-gray-700 uppercase font-bold"
            >
              Fecha Alta
            </label>   

            <input
              id="fecha"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={ e => setFecha(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="sintomas"
              className="text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>   

            <textarea
              id="sintomas"
              placeholder="Describe los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={ e => setSintomas(e.target.value) }
            />              
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={ id ? "Guardar Cambios"  : "Agregar Paciente" }
          />
          
        </form>  */}

        { msg &&  <Alerta 
                    alerta={alerta}
                  />
        } 

      </> 
    )
}
  
  export default Formulario