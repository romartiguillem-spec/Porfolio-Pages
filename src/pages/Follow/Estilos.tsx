
import type { IRedes } from "@/model/interfaces/IRedes";


interface Props {
  redes: IRedes;
}

export const Estilos = ({ redes }: Props) => {
  return (
// Enlace principal con el efecto de 'group'.
    // Usamos 'rounded-full' para un contenedor circular perfecto.
    // 'w-24 h-24' (96px) da un tamaño más generoso y visible a la tarjeta.
    // 'bg-slate-900' con opacidad sutil crea el "agujero" de fondo oscuro.
    <a
      href={redes.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Sígueme en ${redes.nombre}`}
      className="group flex items-center justify-center p-2 transition-all duration-300 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:scale-105"
    >
      {/* Contenedor interno del icono para centrado absoluto. */}
      {/* 'w-16 h-16' (64px) es el espacio que ocupará el icono dentro del círculo. */}
      {/* Esto aumenta la proporción del icono respecto al círculo (más del 60% del diámetro). */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-300">
        <img
          alt={`Logo de ${redes.nombre}`}
          src={redes.imagenurl}
          // CLAVES DEL DISEÑO "PIXEL-PERFECT":
          // 1. 'w-10 h-10' o 'w-12 h-12' unifican el tamaño de todos los iconos.
          // 2. 'object-contain' es fundamental para que el icono se ajuste sin deformarse.
          // 3. 'opacity-90' suaviza los colores (como el rojo de Pinterest) contra el fondo oscuro.
          // 4. 'brightness-90' o 'contrast-110' puede ayudar a que resalten sin saturar.
          className={`w-12 h-12 object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 ${redes.estilos}`} 
        />
      </div>
    </a>
  );
};