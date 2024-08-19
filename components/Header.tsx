import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <nav>
        <Link href="/habits">
          <a className="mr-4">Mis Hábitos</a>
        </Link>
        <Link href="/profile">
          <a>Perfil</a>
        </Link>
      </nav>
    </header>
  );
}
