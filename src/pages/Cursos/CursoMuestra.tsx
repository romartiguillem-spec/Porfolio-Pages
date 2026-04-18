
// src/pages/trabajos/Muestra.tsx
import { useServicios } from "@/hooks/UseCursos/useProducts"; // Importas tu hook personalizado
import { Estilos } from "./Estilos"; // Importas tu componente visual

export const CursoMuestra = () => {
  const { servicios, loading, } = useServicios();

    if (loading) return <div className="text-white bg-slate-950 min-h-screen pt-24 px-6">Cargando servicios...</div>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-slate-950 p-30">
        {
            servicios.map((servicio) => (
            <Estilos
            key={servicio.id}
            // paramentro de entrada del componente ServicioCard, que es un objeto con la informacion de un servicon concreto
            servicio = {servicio}
            />
            ))
        }
    </div>
  );
};