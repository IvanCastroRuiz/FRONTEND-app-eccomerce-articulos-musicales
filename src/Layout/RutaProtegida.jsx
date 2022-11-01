import  { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Sidebar from '../components/rutasProtegidas/Sidebar';
import Header from '../components/rutasProtegidas/Header';
import Footer from '../components/rutasProtegidas/Footer';


const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  const { usuario } = auth;
  if(cargando) return 'cargando...'

  return (
    <>
      <Header/>
      <Sidebar />

      {usuario?._id ? (
          <main className='container mx-auto mt-10'>
              <Outlet /> 
          </main>
      ): <Navigate to="/" /> }

      <Footer/>
    </>
  )
}

export default RutaProtegida