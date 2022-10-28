import React from 'react'

const Vite = ({count,setCount,estado,setEstado}) => {


    let saludo = "Aprendiendo ReactJS - VITE";

    const handleSubmit = (e) => {
        setEstado(!estado);
    };  
  

  return (
    <div className="App">

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
  )
}

export default Vite