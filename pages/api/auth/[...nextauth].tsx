import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { CredentialInput } from 'next-auth/providers/credentials';
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
    };
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials: Record<string, string | undefined> | undefined) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return user;
        }
        throw new Error('Invalid email or password');
      },
      credentials: {}
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: any }) {
      if (token?.id) {
        session.user = { ...session.user, id: token.id };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});
