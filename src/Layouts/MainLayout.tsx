import { Footer } from '@/components/Footer'
import  NavBar  from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    /* min-h-screen: Asegura que el contenedor mida al menos el 100% de la pantalla.
       flex-col: Apila header, main y footer verticalmente.
    */
    <div className="flex flex-col min-h-screen bg-slate-950">
      <header>
        <NavBar />
      </header>

      {/* flex-grow: Esta es la clave. Hace que el contenido principal 
         se estire para ocupar todo el espacio disponible, empujando 
         el footer hacia el final.
      */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};