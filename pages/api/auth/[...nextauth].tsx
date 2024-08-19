import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (user && credentials.password === user.password) {
          return user;
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
  session: {
    jwt: true,
  },
  database: process.env.MONGODB_URI,
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
