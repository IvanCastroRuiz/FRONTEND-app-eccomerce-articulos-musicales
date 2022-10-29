import React from 'react'

const Vite = ({count,setCount,estado,setEstado}) => {


    let saludo = "Aprendiendo ReactJS - VITE";

    const handleSubmit = (e) => {
        setEstado(!estado);
    };  
  

  return (
    <>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      <h1 className="text-cyan-600 font-black text-6xl">STACK MERN {" "}<span className="text-black"><br/> MongoDB <br/> ExpressJS <br/> ReactJS <br/> NodeJS </span></h1>
      <h1 className="text-cyan-600 font-black text-6xl">Administrador de Contenido {" "}<span className="text-black"><br/> Strapi <br/> Cloudinary <br/>Tailwind css</span></h1>
    </div>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

        <button
          onClick={handleSubmit}
          className="btn bg-cyan-600 text-center text-3xl text-slate-200 font-bold"
        >
          Saludar
        </button>
        <div>
          {
            estado 
                  ?
                    <div><strong>{saludo}</strong></div>
                  :
                  "No hay saludo"
          }
        </div>
        
        <h1>Vite + React</h1>
        <div>
          <button 
            onClick={() => 
            setCount((count) => count + 1)}
            className="btn bg-cyan-600 text-center text-3xl text-slate-200 font-bold"  
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </div>
    </>
  )
}

export default Vite