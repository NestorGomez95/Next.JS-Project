import { useSession } from 'next-auth/react';
import ProfileCard from '@/components/ProfileCard';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return <p>Loading...</p>;
  if (!session || !session.user) return <p>Your session has not started.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Perfil</h1>
      <ProfileCard user={session.user} />
    </div>
  );
}

