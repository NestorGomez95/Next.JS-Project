"use client"; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import HabitList from '@/components/HabitList';
import { Habit } from '@/types'; 

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const router = useRouter(); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function fetchHabits() {
      try {
        const res = await fetch('/api/habits');
        const data = await res.json();
        setHabits(data.habits);
      } catch (error) {
        console.error('Error al obtener los hábitos:', error);
        setError('Hubo un problema al obtener los hábitos.');
      }
    }
    fetchHabits();
  }, []);

  const markHabitAsComplete = async (id: string) => {
    try {
      const res = await fetch(`/api/habits/${id}/complete`, {
        method: 'PUT',
      });

      if (res.ok) {
        // Aquí se usa el array 'habits', no el modelo 'Habit'
        const updatedHabits = habits.filter((habit) => habit._id !== id);
        setHabits(updatedHabits);
      } else {
        setError('Hubo un problema al completar el hábito.');
      }
    } catch (error) {
      console.error('Error al completar el hábito:', error);
      setError('Hubo un problema al completar el hábito.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Mis Hábitos</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg">Lista de hábitos:</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => router.push('/habits/new')}
        >
          Añadir Hábito
        </button>
      </div>
      <HabitList habits={habits} onMarkComplete={markHabitAsComplete} />
    </div>
  );
}
