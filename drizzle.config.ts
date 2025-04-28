import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })
const dbUrl = process.env.DATABASE_URL

if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in .env.local')
}
export default defineConfig({
    schema: './src/db/schema/',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})
