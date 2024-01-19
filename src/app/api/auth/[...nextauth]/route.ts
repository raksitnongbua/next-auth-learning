import NextAuth, { AuthOptions, DefaultSession } from 'next-auth';
import Google from 'next-auth/providers/google';
import Okta from 'next-auth/providers/okta';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken: unknown;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
