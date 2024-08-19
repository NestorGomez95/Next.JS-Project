import connectToDatabase from '../../../lib/mongodb';
import Habit from '../../../models/Habit';

export default async function handler(req: { query?: any; body?: any; method?: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; error?: any; habit?: any; message?: string; }): void; new(): any; }; }; }) {
  const { method } = req;
  const { id } = req.query;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const habit = await Habit.findById(id);
        if (!habit) {
          return res.status(404).json({ success: false, error: 'Habit doesnt found' });
        }
        res.status(200).json({ success: true, habit });
      } catch (error) {
        res.status(400).json({ success: false, error: error as any });
      }
      break;
    case 'PUT':
      try {
        const habit = await Habit.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!habit) {
          return res.status(404).json({ success: false, error: 'Habit doesnt found' });
        }
        res.status(200).json({ success: true, habit });
      } catch (error) {
        res.status(400).json({ success: false, error: error as any });
      }
      break;
    case 'DELETE':
      try {
        const deletedHabit = await Habit.deleteOne({ _id: id });
        if (!deletedHabit) {
          return res.status(404).json({ success: false, error: 'Habit doesnt found' });
        }
        res.status(200).json({ success: true, message: 'Habit eliminated' });
      } catch (error) {
        res.status(400).json({ success: false, error: error as any });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
