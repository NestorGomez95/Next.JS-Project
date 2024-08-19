import { useState } from 'react';

export default function HabitForm({ onSubmit }: { onSubmit: any }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, description, frequency });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Habit</label>
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
        <label className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Habit description"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add habit
      </button>
    </form>
  );
}
