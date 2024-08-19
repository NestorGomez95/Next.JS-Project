import { useState, useEffect } from 'react';
import HabitList from '../../components/HabitList';

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function fetchHabits() {
      try {
        const res = await fetch('/api/habits');
        const data = await res.json();
        setHabits(data.habits);
      } catch (error) {
        console.error('Error getting the habit:', error);
      }
    }
    fetchHabits();
  }, []);

  const markHabitAsComplete = async (id) => {
    try {
      const res = await fetch(`/api/habits/${id}/complete`, {
        method: 'PUT',
      });

      if (res.ok) {
        const updatedHabits = habits.map((habit) => {
          if (habit._id === id) {
            return { ...habit, progress: habit.progress + 1 };
          }
          return habit;
        });

        setHabits(updatedHabits);
      }
    } catch (error) {
      console.error('Error completing the habit:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Mis Hábitos</h1>
      <HabitList habits={habits} onMarkComplete={markHabitAsComplete} />
    </div>
  );
}
