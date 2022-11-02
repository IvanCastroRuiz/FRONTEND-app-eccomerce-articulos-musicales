import useUsuarios from '../../hooks/useUsuarios';

const Usuario = ({usuario}) => {
    const { setEdicion, eliminarUsuario } = useUsuarios();

    const { email, nombre, _id, telefono, direccion, token, confirmado } = usuario;
    // console.log(email, nombre, _id, telefono, direccion, token, confirmado);

    const formatearFecha = (fecha) =>{
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha);
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-700 my-2">Nombre: {''}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Email Contacto: {''}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Telefono: {''}
                <span className="font-normal normal-case text-black">{telefono}</span>
            </p>
            
            {/* <p className="font-bold uppercase text-indigo-700 my-2">Fecha de Alta: {''}
                <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span> */}
                {/* <span className="font-normal normal-case text-black">{fecha}</span> */}
            {/* </p> */}
            <p className="font-bold uppercase text-indigo-700 my-2">Direccion: {''}
                <span className="font-normal normal-case text-black">{direccion}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Token: {''}
                <span className="font-normal normal-case text-black">{token}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Confirmado: {''}
                <span className="font-normal normal-case text-black">{confirmado ? "Si" : "No"  }</span>
            </p>
  
            <div className="flex justify-between my-5">
                  <button
                      type="button"
                      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
                      onClick={() => setEdicion(usuario)}
                  >Editar</button>
  
                  <button
                      type="button"
                      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
                      onClick={() => eliminarPaciente(_id)}
                  >Eliminar</button>
            </div>
        </div>
    );
  };
  
export default Usuario