import { BrowserRouter, Route, Routes } from "react-router-dom"; // Esto es un paquete npm install react-router-dom
import { MainLayout } from "../Layouts/MainLayout";
import  Home  from "../pages/Home";
import { Trabajos } from "../pages/Trabajos";
import  Contacto  from "../pages/Contacto";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. Abrimos la ruta del Layout (sin el "/" inicial aquí) */}
                <Route path="/" element={<MainLayout />}>
                    
                    {/* Estos son los elemenentos que vayamos a tocar y nos cambiaran de pagina*/}
                    {/* Esto se renderiza en el <Outlet /> */}
                    <Route index element={<Home />} /> {/* Importante el index hace que la ruta por defecto sea la raiz en este caso /*/}
                    <Route path="trabajos" element={<Trabajos />} />
                    <Route path="contacto" element={<Contacto />} />
                    
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}