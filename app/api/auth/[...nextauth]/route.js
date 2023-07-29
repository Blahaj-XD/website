import { authLogin } from '@lib/backend/auth/login'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // console.log('hello?')
        // console.log(credentials)
        try {
          const user = await authLogin(credentials)
          console.log('?')
          console.log('authorize', { user })

          if (!user) {
            return null
          }

          console.log('authorized')
          return user
        } catch (err) {
          console.log(err)
          throw new Error(err)
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user) return false

      return true
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token = {
          ...token,
          ...user,
        }
      }

      return token
    },
    async session({ session, token, user }) {
      // console.log({ session, token, user })
      session.user = user
      session.token = token
      session.loggedIn = true
      console.log(session)
      return session
    },
  },
})

export { handler as GET, handler as POST }
