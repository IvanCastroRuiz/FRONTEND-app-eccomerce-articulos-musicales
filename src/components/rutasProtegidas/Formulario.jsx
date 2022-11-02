import { useState,useEffect } from 'react'
import Alerta from '../Alerta';
import useUsuarios from '../../hooks/useUsuarios';

const Formulario = () => {

    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ web, setWeb ] = useState('');
    const [ rol, setRol ] = useState('');
    const [ token, setToken ] = useState('');
    const [ confirmado, setConfirmado ] = useState('');
    const [ id, setId ] = useState(null);

    const [ alerta, setAlerta ] = useState({});

    const { usuario, guardarUsuario } = useUsuarios();

    useEffect(()=>{
      if(usuario?.nombre){
        setNombre(usuario.nombre);
        setEmail(usuario.email);
        setPassword(usuario.password);
        setTelefono(usuario.telefono);
        setDireccion(usuario.direccion);
        setWeb(usuario.web);
        setRol(!usuario.rol ? "User" : usuario.rol);
        setToken(!usuario.token ? "Usuario Confirmado" : usuario.token);
        setConfirmado(usuario.confirmado);
        setId(usuario._id);
      }
    }, [usuario])
    
    const handleSudmit = e =>{
      e.preventDefault();
      if([nombre, email, telefono, direccion, web, password ].includes('')){
        setAlerta({msg: "Todo los campos son obligatorios", error: true});
        return;
      };
      
      guardarUsuario({nombre, email, telefono, direccion, web, id, password});

      setAlerta({
        msg: "Guardado Correctamente"
      });

      setNombre("");
      setEmail("");
      setPassword("");
      setTelefono("");
      setDireccion("");
      setWeb("");
      setRol("");
      setToken("");
      setConfirmado("");
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
        

        <form
          className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
          onSubmit={handleSudmit}
        
        >
          <div className="mb-5">
            <label  
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre Usuario
            </label>   

            <input
              id="nombre"
              type="text"
              placeholder="Nombre del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={ e => setNombre(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >
              Email Usuario
            </label>   

            <input
              id="email"
              type="text"
              placeholder="Email del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ e => setEmail(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="password"
              className="text-gray-700 uppercase font-bold"
            >
              Password Usuario
            </label>   

            <input
              id="password"
              type="password"
              placeholder="Password del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={password}
              onChange={ e => setPassword(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="telefono"
              className="text-gray-700 uppercase font-bold"
            >
              Telefono Usuario
            </label>   

            <input
              id="teelefono"
              type="text"
              placeholder="Telefono del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={telefono}
              onChange={ e => setTelefono(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="direccion"
              className="text-gray-700 uppercase font-bold"
            >
              Direccion Usuario
            </label>   

            <input
              id="direccion"
              type="text"
              placeholder="Telefono del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={direccion}
              onChange={ e => setDireccion(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="web"
              className="text-gray-700 uppercase font-bold"
            >
              Web Usuario
            </label>   

            <input
              id="web"
              type="text"
              placeholder="Web del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={web}
              onChange={ e => setWeb(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="rol"
              className="text-gray-700 uppercase font-bold"
            >
              Rol Usuario
            </label>   

            <input
              id="web"
              type="text"
              placeholder="Rol del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              disabled="on"
              value={rol}
              onChange={ e => setRol(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="token"
              className="text-gray-700 uppercase font-bold"
            >
              Token Usuario
            </label>   

            <input
              id="web"
              type="text"
              placeholder="Token del Usuario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={token}
              disabled="on"
              onChange={ e => setToken(e.target.value) }
            />              
          </div>

          <div className="mb-5">
            <label  
              htmlFor="confirmado"
              className="text-gray-700 uppercase font-bold"
            >
              Usuario Confirmado
            </label>   

            <input
              id="confirmado"
              type="text"
              placeholder="Usuario Confirmado"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={confirmado}
              disabled="on"
              onChange={ e => setConfirmado(e.target.value) }
            />              
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={ id ? "Guardar Cambios"  : "Agregar Usuario" }
          />
          
        </form> 

        { msg &&  <Alerta 
                    alerta={alerta}
                  />
        } 

      </> 
    )
}
  
  export default Formulario