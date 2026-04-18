// src/pages/trabajos/TrabajoDetalleMuestra.tsx
import { useParams } from "react-router-dom";
import { useServicio } from "@/hooks/UseCursos/useProduct";
import { TrabajoDetalleEstilos } from "./CursoDetalleEstilos";

export const CursoDetalleMuestra = () => {
  const { id } = useParams();
  const { servicio, loading, error } = useServicio(id);

  return (
    <div className="bg-slate-950 min-h-screen text-white pt-24 px-6 pb-12">

      {error && (
        <div className="text-center p-10 bg-red-900/20 rounded-xl border border-red-500/50">
          <p className="text-red-400 font-bold">Error al cargar: {error}</p>
        </div>
      )}

      {servicio ? (
        <TrabajoDetalleEstilos servicio={servicio} />
      ) : (
        !loading && <p className="text-center text-slate-500">No se encontró el trabajo solicitado.</p>
      )}
    </div>
  );
};