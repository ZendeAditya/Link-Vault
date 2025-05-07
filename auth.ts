import { Pool } from '@neondatabase/serverless'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import NeonAdapter from '@auth/neon-adapter'
export const { handlers, signIn, signOut, auth } = NextAuth(() => {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    return {
        adapter: NeonAdapter(pool),
        providers: [
            Google({
                clientId: process.env.AUTH_GOOGLE_ID,
                clientSecret: process.env.AUTH_GOOGLE_SECRET,
            }),
        ],
    }
})
