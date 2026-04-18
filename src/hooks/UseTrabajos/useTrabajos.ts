import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ITrabajos } from '@/model/interfaces/ITrabajos';

export const useTrabajos = () => {
  const [trabajos, setTrabajos] = useState<ITrabajos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrabajos = async () => {
const { data, error } = await supabase.from('trabajos').select('*');

      if (!error && data) {
        setTrabajos(data);
      }
      setLoading(false);
    };

    fetchTrabajos();
  }, []);

  return { trabajos, loading };
};