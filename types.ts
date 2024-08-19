
export interface Habit {
    _id: string;
    title: string;
    description: string;
    frequency: string;
    progress: number;
  }
  
  
  export interface HabitCardProps {
    habit: Habit;
    onMarkComplete: (id: string) => void;
  }
  