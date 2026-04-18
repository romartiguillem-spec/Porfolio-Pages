// src/hooks/useServicio.ts
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { IServicios } from '../../model/interfaces/IServicios';

export const useServicio = (id: string | undefined) => {
  const [servicio, setServicio] = useState<IServicios | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServicio = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('servicios') // Nombre de tu tabla en minúsculas
          .select('*')
          .eq('id', id)
          .single(); // Solo un resultado

        if (supabaseError) throw supabaseError;
        setServicio(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicio();
  }, [id]);

  return { servicio, loading, error };
};