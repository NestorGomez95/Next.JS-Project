import mongoose from 'mongoose';

const HabitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  frequency: { type: String, required: true }, // daily, weekly, etc.
  completedDates: [Date],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Habit || mongoose.model('Habit', HabitSchema);
