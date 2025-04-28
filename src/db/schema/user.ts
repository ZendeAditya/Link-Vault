import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('user', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    createdAt: integer('created_at').notNull().default(Date.now()),
    updatedAt: integer('updated_at').notNull().default(Date.now()),
})
