import { Link, useNavigate } from 'react-router-dom';
import { useState  } from 'react';
import Alerta from '../components/Alerta';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const navigate = useNavigate();

  const handleSudmit = e =>{
    e.preventDefault();
    console.log("Probando");
  }

  const { msg } = alerta;

  return (

    <>
          <div>
            <h1 className="text-cyan-600 font-black text-6xl">Inicia Sesion y Administra tus {" "}<span className="text-black">Articulos</span></h1>
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
                  placeholder="Tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                />
              </div>
              <input 
                type="submit"
                value="Iniciar Sesion"
                className="bg-cyan-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"              
              />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link 
                className="block text-center my-5 text-gray-500"
                to="/registrar">¿No tienes una cuenta? Registrate</Link>
              <Link 
                className="block text-center my-5 text-gray-500"
                to="/olvide-password">Olvide mi Password</Link>
            </nav>

          </div>
        </>
  )
}

export default Home