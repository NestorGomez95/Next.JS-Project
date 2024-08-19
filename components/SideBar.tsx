'use client';

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`bg-gray-200 w-64 p-4 ${className}`}>
      
    </aside>
  );
};

export default Sidebar;
