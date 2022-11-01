import { useState } from 'react';
import Formulario from '../../components/rutasProtegidas/Formulario';
import ListadoPacientes from '../../components/rutasProtegidas/ListadoUsuarios';


const AdministrarUsuarios = () => {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
        <button 
          type="button"
          className='bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden'
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >{mostrarFormulario ? 'Ocultar Formulario': 'Mostrar Formulario' }</button>


        <div className={`${mostrarFormulario ? 'block': 'hidden'} md:block md:w-1/2 lg:w-2/5 `}>
            <Formulario />
        </div>

        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
    </div>
  )
}

export default AdministrarUsuarios