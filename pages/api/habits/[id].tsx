import connectToDatabase from '../../../lib/mongodb';
import Habit from '../../../models/Habit';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const habit = await Habit.findById(id);
        if (!habit) {
          return res.status(404).json({ success: false, error: 'Hábito no encontrado' });
        }
        res.status(200).json({ success: true, habit });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'PUT':
      try {
        const habit = await Habit.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!habit) {
          return res.status(404).json({ success: false, error: 'Hábito no encontrado' });
        }
        res.status(200).json({ success: true, habit });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedHabit = await Habit.deleteOne({ _id: id });
        if (!deletedHabit) {
          return res.status(404).json({ success: false, error: 'Hábito no encontrado' });
        }
        res.status(200).json({ success: true, message: 'Hábito eliminado' });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
