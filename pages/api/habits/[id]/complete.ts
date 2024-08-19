import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../../lib/mongodb';
import Habit from '../../../../models/Habit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'PUT') {
    const { id } = req.query;
    try {
      const habit = await Habit.findById(id);
      if (!habit) {
        return res.status(404).json({ success: false, error: 'Hábito no encontrado' });
      }

      
      await Habit.findByIdAndDelete(id);

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al completar el hábito:', error);
      return res.status(500).json({ success: false, error: 'Error al completar el hábito' });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }
}
