import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 w-64 p-4">
      <ul>
        <li className="mb-2">
          <Link href="/habits">
            <a>Mis Hábitos</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/profile">
            <a>Perfil</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
