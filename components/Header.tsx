import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`bg-blue-500 p-4 text-white ${className}`}>
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <nav className="mt-2 space-x-4">
        <Link href="/habits">
          Mis Hábitos
        </Link>
        <Link href="/profile">
          Perfil
        </Link>
      </nav>
    </header>
  );
};

export default Header;
