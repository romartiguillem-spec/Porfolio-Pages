
import { useRedes } from "@/hooks/UseRedes/useRedes";
import type { IRedes } from "@/model/interfaces/IRedes";
import { Estilos } from "../Follow/Estilos";



export const MuestraFollow = () => {
  const { redes, loading } = useRedes();

  if (loading) return <div className="bg-slate-950 text-white p-20">Cargando trabajos...</div>;

  return (
    <div id="follow" className="bg-slate-950 py-24 sm:py-32 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24"> {/* Añade padding vertical para dar aire */}
  <h2 className="text-center text-sm/6 font-semibold tracking-widest text-slate-400 uppercase mb-16">
    Conecta conmigo
  </h2>
  
  <nav className="mx-auto grid max-w-lg grid-cols-2 gap-x-8 gap-y-12 items-center justify-items-center sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:gap-x-16">
    {redes.map((item: IRedes) => (
      <Estilos key={item.id} redes={item} />
    ))}
  </nav>
</div>
        </div>
        </div>
  );
};