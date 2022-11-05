import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import { useState } from 'react';

// Context
import { AuthProvider } from './context/AuthProvider';
import { UsuariosProvider } from './context/UsuariosProvider';

// components Layout
import LayoutPublic from './Layout/LayoutPublic';
import RutaProtegida from './Layout/RutaProtegida';

// pages
import Home from './pages/Home';
import Vite from './pages/Vite';
import Main from './pages/Main';

// usuarios
import Registrar from './pages/usuarios/Registrar';
import OlvidePassword from './pages/usuarios/OlvidePassword';
import ConfirmarCuenta from './pages/usuarios/ConfirmarCuenta';
import NuevoPassword from './pages/usuarios/NuevoPassword';
import AdministrarUsuarios from './pages/usuarios/AdministrarUsuarios';
import EditarPerfil from './pages/usuarios/EditarPerfil';
import CambiarPassword from './pages/usuarios/CambiarPassword';

// Articulos
import ListaProductos from './pages/articulos/ListaProductos';
import DetalleArticulo from './pages/articulos/DetalleArticulo';



// Styles
//import './assets/css/App.css';
//import './assets/css/index.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import reactLogo from './assets/react.svg';

function App() {

  // Hooks - vite
  //,estado,setEstado
  const [count, setCount] = useState(0);
  const [estado,setEstado] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <UsuariosProvider>
          {/* Rutas Publicas */}
          <Routes>
            <Route exact path="/" element={<LayoutPublic
                                            reactLogo={reactLogo}  
                                          />}>
              <Route path="/" element={<Home/>}/>
              <Route path="registrar" element={<Registrar/>} />
              <Route path="olvide-password" element={<OlvidePassword/>} />
              <Route path="olvide-password/:token" element={<NuevoPassword/>} />
              <Route path="confirmar/:token" element={<ConfirmarCuenta/>} />
              <Route path="vite" element={<Vite
                                            count={count}
                                            setCount={setCount}
                                            estado={estado}
                                            setEstado={setEstado}
                                        />}/>                                      
              <Route path="contacto" element={<Main/>}/>
            </Route>

            {/* Rutas Protegidas */}
            <Route path="/admin" element={<RutaProtegida/>}>
              <Route index element={<AdministrarUsuarios/>} />
              <Route path="perfil" element={<EditarPerfil/>} />
              <Route path="lista-articulo" element={<ListaProductos/>}/>
              <Route path="detalle-articulo/:id" element={<DetalleArticulo/>}/>
              <Route path="cambiar-password" element={<CambiarPassword/>} />
            </Route> 

          </Routes>  
        </UsuariosProvider>
      </AuthProvider>      
    </BrowserRouter>    
  )
}

export default App
