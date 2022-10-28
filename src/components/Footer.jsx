import React from 'react'

const Footer = ({reactLogo}) => {

  return (
    <footer className="fooster">
        <div className='align-text-bottom'>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a> 
            Todos los derechos reservados
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
        </div>
    </footer>
  )
}

export default Footer