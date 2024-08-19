import { useState } from 'react';

export default function HabitForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, frequency });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Hábito</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ej. Read 30 minutes per day"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Habit description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Frecuencia</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensual</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Agregar Hábito
      </button>
    </form>
  );
}
