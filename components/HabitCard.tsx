import { HabitCardProps } from '../types'; 
import ProgressBar from './ProgressBar';

export default function HabitCard({ habit, onMarkComplete }: HabitCardProps) {
  return (
    <div className="bg-gray-100 p-4 mb-4 rounded shadow-md">
      <h3 className="text-xl font-bold">{habit.title}</h3>
      <p className="text-gray-700">{habit.description}</p>
      <p className="text-sm text-gray-500">Frecuencia: {habit.frequency}</p>
      <ProgressBar progress={habit.progress} />
      <button
        onClick={() => onMarkComplete(habit._id)}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Marcar como completado
      </button>
    </div>
  );
}
