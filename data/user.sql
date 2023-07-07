DROP TABLE IF EXISTS "user", "skill", "project";

CREATE TABLE "user" (
    "user_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_username" VARCHAR(255) NOT NULL UNIQUE,
    "user_mail" VARCHAR(255),
    "user_password" VARCHAR(255),
    "user_picture" VARCHAR(255),
    "user_firstname" VARCHAR(255),
    "user_lastname" VARCHAR(255),
    "user_biography" TEXT,
    "user_linkedin" VARCHAR(255),
    "user_github" VARCHAR(255),
    "user_phone" VARCHAR(255),
    "user_statut" VARCHAR(255) DEFAULT 'user',
    "user_job_title" VARCHAR(255),
    "user_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "user_updated_at" TIMESTAMPTZ
);

CREATE TABLE "skill" (
    "skill_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "skill_name" VARCHAR(255),
    "skill_description" VARCHAR(255),
    "skill_user_username" VARCHAR(255) NOT NULL REFERENCES "user"("user_username") ON DELETE CASCADE,
    "skill_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "skill_updated_at" TIMESTAMPTZ
);

CREATE TABLE "project" (
    "project_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_name" VARCHAR(255),
    "project_date" DATE,
    "project_statut" VARCHAR(255),
    "project_description" VARCHAR(255),
    "project_picture" VARCHAR(255),
    "project_video" VARCHAR(255),
    "project_sound" VARCHAR(255),
    "project_link" VARCHAR(255),
    "project_user_username" VARCHAR(255) NOT NULL REFERENCES "user"("user_username") ON DELETE CASCADE,
    "project_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "project_updated_at" TIMESTAMPTZ
);
