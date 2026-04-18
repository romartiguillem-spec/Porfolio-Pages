import { useRedes } from "@/hooks/UseRedes/useRedes"; // Importa tu hook aquí
// Ya no necesitas la interfaz FooterProps porque no recibe nada

export const Footer = () => {
  const { redes, loading } = useRedes(); // El Footer obtiene sus propios datos

  const currentYear = new Date().getFullYear(); // Para mostrar el año actual dinámicamente

  if (loading) return null; // O un footer vacío mientras carga

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-white font-bold text-xl tracking-tight">Guillem</span>
          {/*El currentYear se actualiza automáticamente cada año, evitando que el pie de página quede obsoleto*/}
          <p className="text-xs">&copy; {currentYear} Todos los derechos reservados.</p>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          {redes?.map((red) => (
            <a key={red.id} href={red.url} target="_blank" rel="noreferrer">
              <img src={red.imagenurl} alt={red.nombre} className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};