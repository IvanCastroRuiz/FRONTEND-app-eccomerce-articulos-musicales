import {  useState } from 'react'
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Alerta from '../../components/Alerta';
//import axios from 'axios';

const Registrar = () => {

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ direccion, setDireccion ] = useState('');
  const [ web, setWeb ] = useState('');
  
  const [ alerta, setAlerta ] = useState({});


  const handleSudmit = async (e) =>{
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({msg: "Hay campos vacios", error: true});
      return;
    };

    if(password !== repetirPassword){
      setAlerta({msg: "Los password no son iguales", error: true});
      return;
    }

    if(password.length < 6){
      setAlerta({msg: "El password es muy corto, agrega minimo 6 caracteres", error: true});
      return;
    }

    setAlerta({});

      // Creando el usuario en la API
      
      try {
        
        await clienteAxios.post('/usuarios', { nombre, email, password, telefono, direccion, web } );
        setAlerta({
            msg: "Creado correctamente, revisa tu email", 
            error: false
        });

        setNombre("");
        setEmail("");
        setPassword("");
        setRepetirPassword("");
        setTelefono("");
        setDireccion("");
        setWeb("");

    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-cyan-600 font-black text-6xl">Crea tu cuenta y Administra {" "}<span className="text-black">tus Articulos</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

            { msg &&  <Alerta 
                        alerta={alerta}
                      />
            }           

            <form
              onSubmit={handleSudmit}
            >

              <div className="my-5">
                  <label
                    className="uppercase text-gray-600 block text-xl font-bold"
                  >
                    Nombre
                  </label>
                  <input 
                    type="text"
                    placeholder="Tu Nombre"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
                  />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="Email de registro"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={email}
                  onChange={ e => setEmail(e.target.value) }
                />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Password
                </label>
                <input 
                  type="password"
                  placeholder="Tu password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Repetir Password
                </label>
                <input 
                  type="password"
                  placeholder="Repite tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={repetirPassword}
                  onChange={ e => setRepetirPassword(e.target.value) }
                />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Teléfono
                </label>
                <input 
                  type="tel"
                  placeholder="Ingrese su teléfono (por ejemplo, 3003000000)"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={telefono}
                  onChange={ e => setTelefono(e.target.value) }
                />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Dirección
                </label>
                <input 
                  type="text"
                  placeholder="Ingrese su dirección"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={direccion}
                  onChange={ e => setDireccion(e.target.value) }
                />
              </div>

              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Dirección Web
                </label>
                <input 
                  type="text"
                  placeholder="Ingrese su dirección Web"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={web}
                  onChange={ e => setWeb(e.target.value) }
                />
              </div>

              <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-cyan-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"              
              />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link 
                className="block text-center my-5 text-gray-500"
                to="/">¿Ya tienes una cuenta? Inicia Sesion</Link>
              <Link 
                className="block text-center my-5 text-gray-500"
                to="/olvide-password">Olvide mi Password</Link>
            </nav>

      </div>
    </>
  )
}

export default Registrar