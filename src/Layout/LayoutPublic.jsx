import { Outlet  } from 'react-router-dom';

// Componentes
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const LayoutPublic = ({reactLogo}) => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Navegacion/>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet/>
      </main>  
      <Footer
        reactLogo={reactLogo}
      />
    </>
  )
}

export default LayoutPublic