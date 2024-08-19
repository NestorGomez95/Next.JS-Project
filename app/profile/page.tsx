import Image from 'next/image';
import habitImage from '/images/habit-image.png';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-lg">
      
      <div className="col-span-1 bg-blue-100 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome</h1>
        <p className="text-lg text-center">
          Welcome to your profile. Here, you can view and update your personal information.
        </p>
      </div>

      
      <div className="col-span-1 flex flex-col items-center justify-center">
        <div className="bg-gray-100 p-4 rounded-full">
          <Image src={habitImage} alt="Habit Tracker Image" width={200} height={200} className="rounded-full" />
        </div>
      </div>

      
      <div className="col-span-1 bg-red-100 p-6 rounded-lg">
        <p className="text-lg text-center">
          This website allows you to track your daily habits and monitor your progress. You can add new habits, mark them as complete, and manage your goals to help you build better routines.
        </p>
      </div>

      
      <div className="col-span-1 bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Benefits:</h2>
        <ul className="list-disc list-inside">
          <li>Stay organized with your daily habits</li>
          <li>Track progress and reach your goals</li>
          <li>Improve productivity and focus</li>
          <li>Build better routines for a healthier lifestyle</li>
        </ul>
      </div>
    </div>
  );
}
