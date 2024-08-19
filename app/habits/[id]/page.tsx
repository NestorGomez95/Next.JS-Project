import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HabitCard from '@/components/HabitCard';

export default function HabitDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchHabit = async () => {
        try {
          const res = await fetch(`/api/habits/${id}`);
          const data = await res.json();
          setHabit(data.habit);
        } catch (error) {
          console.error('Error getting the habit:', error);
        }
      }
      fetchHabit();
    }
  }, [id]);

  if (!habit) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Detalle del Hábito</h1>
      <HabitCard habit={habit} onMarkComplete={() => {}} />
    </div>
  );
}
