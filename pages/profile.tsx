import { useSession } from 'next-auth/client';
import ProfileCard from '../components/ProfileCard';

export default function ProfilePage() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Your session has not started.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Perfil</h1>
      <ProfileCard user={session.user} />
    </div>
  );
}
