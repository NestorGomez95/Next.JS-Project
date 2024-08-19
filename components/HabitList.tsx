import HabitCard from './HabitCard';
import { Habit } from '../types'; 

interface HabitListProps {
  habits: Habit[];
  onMarkComplete: (id: string) => void;
}

export default function HabitList({ habits, onMarkComplete }: HabitListProps) {
  return (
    <div className="max-w-lg mx-auto mt-8">
      {habits.length > 0 ? (
        habits.map((habit) => (
          <HabitCard key={habit._id} habit={habit} onMarkComplete={onMarkComplete} />
        ))
      ) : (
        <p className="text-center text-gray-500">No tienes hábitos aún.</p>
      )}
    </div>
  );
}

