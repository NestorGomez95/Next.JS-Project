"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddHabitPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error
  const [success, setSuccess] = useState<string | null>(null); // Estado de éxito
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validación básica
    if (title.length < 3 || description.length < 5) {
      setError('El título debe tener al menos 3 caracteres y la descripción al menos 5.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setSuccess('Hábito añadido exitosamente.');
        setTitle('');
        setDescription('');
        setTimeout(() => {
          router.push('/habits');
        }, 1500); // Redirecciona después de 1.5 segundos
      } else {
        setError('Hubo un error al añadir el hábito.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocurrió un error. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Añadir Nuevo Hábito</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded text-black"
            required
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Añadiendo...' : 'Añadir Hábito'}
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded ml-4"
          onClick={() => router.push('/habits')}
          disabled={loading}
        >
          Volver
        </button>
      </form>
    </div>
  );
}
