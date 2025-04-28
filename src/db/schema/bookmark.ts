import {
    integer,
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
} from 'drizzle-orm/pg-core'
import { usersTable as users } from './user'
export const bookmarks = pgTable('bookmarks', {
    id: serial('id').primaryKey(),
    userId: integer('user_id')
        .references(() => users.id)
        .notNull(),
    url: varchar('url', { length: 2048 }).notNull(),
    title: varchar('title', { length: 512 }),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at')
        .defaultNow()
        .$onUpdateFn(() => new Date()),
})
