import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-blue-500 p-4 text-white text-center mt-8 ${className}`}>
      <p>&copy; 2024 Habit Tracker. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
