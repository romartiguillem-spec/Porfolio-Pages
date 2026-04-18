import { useEffect, useState } from 'react';
import type { IServicios } from '@/model/interfaces/IServicios';
import { supabase } from '@/lib/supabase';

export const useServicios = () => {
  const [servicios, setServicios] = useState<IServicios[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicios = async () => {
      const { data, error } = await supabase
        .from('servicios') 
        .select('*');

      if (!error && data) {
        setServicios(data);
      }
      setLoading(false);
    };

    fetchServicios();
  }, []);

  return { servicios, loading };
};