import {
    pgTable,
    serial,
    text,
    varchar,
    integer,
    bigint,
    timestamp,
} from 'drizzle-orm/pg-core'

// Users Table
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
})

// Accounts Table
export const accounts = pgTable('accounts', {
    id: serial('id').primaryKey(),
    userId: integer('userId').notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: bigint('expires_at', { mode: 'number' }),
    id_token: text('id_token'),
    scope: text('scope'),
    session_state: text('session_state'),
    token_type: text('token_type'),
})

// Sessions Table
export const sessions = pgTable('sessions', {
    id: serial('id').primaryKey(),
    userId: integer('userId').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
    sessionToken: varchar('sessionToken', { length: 255 }).notNull(),
})

// Verification Token Table
export const verificationToken = pgTable(
    'verificationToken',
    {
        identifier: text('identifier').notNull(),
        token: text('token').notNull(),
        expires: timestamp('expires', { mode: 'date' }).notNull(),
    },
    (table) => {
        return {
            pk: {
                columns: [table.identifier, table.token],
                primaryKey: true,
            },
        }
    }
)
