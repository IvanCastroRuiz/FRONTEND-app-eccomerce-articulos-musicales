import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';


const NuevoPassword = () => {

  const [ password, setPassword ] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');
  const [ cambioConfirmado, setCambioConfirmado ] = useState(false);
  const [ passwordModificado, setPasswordModificado ] = useState(false);

  const [ alerta, setAlerta ] = useState({});

  const params = useParams();
  const { token } = params;
  
  //Consultar API para validar el Token
  useEffect(()=>{
    const comprobarToken = async () =>{
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: "Coloca tu nuevo password",
        });
        setCambioConfirmado(true);
      } catch (error) {
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true
        });
      }       
    };

    comprobarToken();
  }, []);

  const handleSudmit = async e =>{
    e.preventDefault();

    if([password, repetirPassword].includes('')){
      setAlerta({msg: "Hay campos vacios", error: true});
      return;
    };

    if(password !== repetirPassword){
      setAlerta({msg: "Los password no son iguales", error: true});
      return;
    };

    if(password.length < 6){
      setAlerta({msg: "El password es muy corto, agrega minimo 6 caracteres", error: true});
      return;
    };

    // Modificar el password
    // try {

    //   const url = `/veterinarios/olvide-password/${token}`;

    //   const { data } = await clienteAxios.post(url, {
    //     password
    //   });
    //   setAlerta({
    //     msg: data.msg
    //   }); 
    //   setCambioConfirmado(false);
    //   setPasswordModificado(true);
    // } catch (error) {
    //   setAlerta({
    //     msg: error.response.data.msg,
    //     error: true
    //   });      
    // }

  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-cyan-600 font-black text-6xl">Reestablece tu password y no Pierdas accesos a {" "}<span className="text-black">tus Articulos</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

          { msg &&  <Alerta 
                        alerta={alerta}
                        setAlerta={setAlerta}
                    />
          } 

          { cambioConfirmado && (
              <>
                <form
                  onSubmit={handleSudmit}
                >
                      <div className="my-5">
                        <label
                          className="uppercase text-gray-600 block text-xl font-bold"
                        >
                          Nuevo Password
                        </label>
                        <input 
                          type="password"
                          placeholder="Tu Nuevo password"
                          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                          value={password}
                            onChange={ e => setPassword(e.target.value) }
                        />
                      </div>
        
                      <div className="my-5">
                        <label
                          className="uppercase text-gray-600 block text-xl font-bold"
                        >
                          Repetir Nuevo Password
                        </label>
                        <input 
                          type="password"
                          placeholder="Repite tu Nuevo Password"
                          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                          value={repetirPassword}
                            onChange={ e => setRepetirPassword(e.target.value) }
                        />
                      </div>
        
                      <input 
                        type="submit"
                        value="Guardar Nuevo Password"
                        className="bg-cyan-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"              
                      />
                </form>
              </>
          )}

          { passwordModificado && (
                  <Link 
                    className="block text-center my-5 text-gray-500"
                    to="/">Inicia Sesion
                  </Link>
          )}
      </div>
    </>  
  )
}

export default NuevoPassword