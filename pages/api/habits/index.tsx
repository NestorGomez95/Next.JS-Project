import connectToDatabase from '../../../lib/mongodb';
import Habit from '../../../models/Habit';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const habit = await Habit.create(req.body);
        res.status(201).json({ success: true, data: habit });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'GET':
      try {
        const habits = await Habit.find({});
        res.status(200).json({ success: true, habits });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
