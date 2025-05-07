CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" integer DEFAULT 1745826579452 NOT NULL,
	"updated_at" integer DEFAULT 1745826579452 NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
