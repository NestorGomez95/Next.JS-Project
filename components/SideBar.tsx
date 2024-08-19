'use client';

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`bg-gray-200 w-64 p-4 ${className}`}>
      <ul>
        <li className="mb-2">
          <Link href="/habits">Mis Hábitos</Link>
        </li>
        <li className="mb-2">
          <Link href="/profile">Perfil</Link>
        </li>
        {/* Puedes añadir más enlaces aquí si lo deseas */}
      </ul>
    </aside>
  );
};

export default Sidebar;
