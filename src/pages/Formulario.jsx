import { useState } from 'react'

import Alerta from '../components/Alerta';

const Formulario = ({contactos,setContactos}) => {

  const [ alerta, setAlerta ] = useState({});
  const [ nombre, setNombre ] = useState(""); 
  const [ telefono, setTelefono ] = useState(""); 
  const [ correo, setCorreo ] = useState(""); 
  const [ mensaje, setMensaje ] = useState(""); 

  // Validar los datos

  const sincronizarStorage = (contactos) => {

    let datos = {
        "nombre": nombre,
        "telefono":telefono,
        "correo":telefono,
        "mensaje":telefono

    };

    contactos.push(datos);
    localStorage.setItem('contactos', JSON.stringify(contactos));
    if(contactos){
        setContactos(contactos);
    }
  };  
  
  const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.id);

        // Validacion
        if([nombre,telefono,correo,mensaje].includes("")){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            });
            return;
        }

        // Paso validacion 
        setAlerta({
            msg: "Informacion enviada de forma exitosa"
        });

        sincronizarStorage(contactos);

        setNombre("");
        setTelefono("");
        setCorreo("");
        setMensaje("");
  };

  const { msg } = alerta;
  
  return (
    <>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <h1 className="text-cyan-600 font-black text-6xl">Contactenos llenando todos los campos {" "}</h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form 
                onSubmit={handleSubmit}
            >
                
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Nombre
                    </label>
                    <input 
                        id="nombre" 
                        name="nombre" 
                        type="text" 
                        placeholder="Tu nombre" 
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}    
                    />
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Telefono
                    </label>
                    <input 
                        id="telefono" 
                        type="tel" 
                        placeholder="Tu telefono" 
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"  
                        value={telefono}
                        onChange={ e => setTelefono(e.target.value)}  
                    />
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Correo
                    </label>
                    <input 
                        id="correo" 
                        type="email" 
                        placeholder="Tu Email" 
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"  
                        value={correo}
                        onChange={ e => setCorreo(e.target.value)} 
                    />
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >
                        Mensaje
                    </label>
                    <textarea 
                        id="mensaje" 
                        placeholder="Tu mensaje" 
                        name="mensaje" 
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"  
                        value={mensaje}
                        onChange={ e => setMensaje(e.target.value)} 
                    />
                </div>
                {/* Mostar Alerta */}

                {
                    msg && 
                        <Alerta
                            alerta={alerta}
                            setAlerta={setAlerta}
                        />
                }
                <input 
                    className="bg-cyan-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"              
                    type="submit" 
                    defaultValue="Enviar" 
                />
            </form>
        </div>
    </>
    
  )
}

export default Formulario