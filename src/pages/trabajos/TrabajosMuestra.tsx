
import { useTrabajos } from "@/hooks/UseTrabajos/useTrabajos"; // Importas tu hook personalizado
import { Estilos } from "@/pages/Trabajos/Estilos"; // Importas tu componente visual
import type { ITrabajos } from "@/model/interfaces/ITrabajos";

export const TrabajosMuestra = () => {
  const { trabajos, loading, } = useTrabajos();

  if (loading) return <div className="bg-slate-950 text-white p-20">Cargando trabajos...</div>;

  return (
    <div id="trabajos" className="bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Trabajos realizados
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trabajos.map((item: ITrabajos) => (
            <Estilos key={item.id} trabajo={item} />
          ))}
        </div>
      </div>
    </div>
  );
};