import mongoose from 'mongoose';

const HabitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  frequency: { type: String, required: false },
  progress: { type: Number, default: 0 }, // Asegúrate de que este campo esté presente
});

const Habit = mongoose.models.Habit || mongoose.model('Habit', HabitSchema);
export default Habit;

