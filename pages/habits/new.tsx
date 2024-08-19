import { useRouter } from 'next/router';
import HabitForm from '../../components/HabitForm';

export default function NewHabit() {
  const router = useRouter();

  const addHabit = async (habit) => {
    try {
      const res = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(habit),
      });

      if (res.ok) {
        router.push('/habits');
      }
    } catch (error) {
      console.error('Error adding the habit:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Agregar Nuevo Hábito</h1>
      <HabitForm onSubmit={addHabit} />
    </div>
  );
}
