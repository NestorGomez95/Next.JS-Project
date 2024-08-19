export default function ProfileCard({ user }: { user: any }) {
    return (
      <div className="bg-white p-4 rounded shadow-md text-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-700">{user.email}</p>
      </div>
    );
  }
  