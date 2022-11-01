import useUsuarios from '../../hooks/useUsuarios';
import Usuario from './Usuario';

const ListadoUsuarios = () => {

    const { usuarios } = useUsuarios();

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
                            paciente={usuario}
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