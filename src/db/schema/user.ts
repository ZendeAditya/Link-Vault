import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
} from 'drizzle-orm/pg-core'

export const usersTable = pgTable('user', {
    id: serial('id').primaryKey(),
    username: text('username').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    isVerified: boolean('is_verified').default(false),
    verificationToken: text('verification_token'),
    verificationTokenExpiry: timestamp('verification_token_expiry'),
    createdAt: integer('created_at').notNull().default(Date.now()),
    updatedAt: integer('updated_at').notNull().default(Date.now()),
})
