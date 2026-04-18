import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { IRedes } from '@/model/interfaces/IRedes';

export const useRedes = () => {
  const [redes, setRedes] = useState<IRedes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRedes = async () => {
const { data, error } = await supabase.from('redes').select('*');

      if (!error && data) {
        setRedes(data);
      }
      setLoading(false);
    };

    fetchRedes();
  }, []);

  return { redes, loading };
};