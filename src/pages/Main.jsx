import { useState } from 'react'
import Formulario from './Formulario'; 

const Main = () => {

  // Hooks
  const [ contactos, setContactos ] = useState(
    localStorage.getItem('contactos') ? JSON.parse(localStorage.getItem('contactos')) : []
  );


  return (
          <Formulario
            contactos={contactos}
            setContactos={setContactos}
          />
  )
}

export default Main