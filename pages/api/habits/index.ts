import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongodb';
import Habit from '../../../models/Habit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, error: 'Title and description are required.' });
    }

    try {
      const newHabit = new Habit({ title, description });
      await newHabit.save();
      res.status(201).json({ success: true, habit: newHabit });
    } catch (error) {
      console.error('Error adding habit:', error);
      res.status(500).json({ success: false, error: 'Error adding habit' });
    }
  } else if (req.method === 'GET') {
    try {
      const habits = await Habit.find({});
      res.status(200).json({ success: true, habits });
    } catch (error) {
      console.error('Error fetching habits:', error);
      res.status(500).json({ success: false, error: 'Error fetching habits' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
