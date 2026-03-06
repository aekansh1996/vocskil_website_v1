/*
  # Add missing Exam and Question fields

  This migration adds fields that exist in the schema but were not in previous migrations:
  - Exam.duration (int, default 60)
  - Exam.isPublic (boolean, default false)
  - Exam.customFields (text, nullable)
  - Exam.courseId (make nullable)
  - Question.type (string, default MCQ)
  - Question.options (make nullable)
*/

-- Add missing columns to Exam
ALTER TABLE "Exam" ADD COLUMN "duration" INTEGER NOT NULL DEFAULT 60;
ALTER TABLE "Exam" ADD COLUMN "isPublic" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Exam" ADD COLUMN "customFields" TEXT;

-- Recreate Exam table to make courseId nullable
PRAGMA foreign_keys=OFF;

CREATE TABLE "Exam_new" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "courseId" TEXT,
    "passingScore" INTEGER NOT NULL DEFAULT 70,
    "duration" INTEGER NOT NULL DEFAULT 60,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "customFields" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Exam_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO "Exam_new" SELECT * FROM "Exam";
DROP TABLE "Exam";
ALTER TABLE "Exam_new" RENAME TO "Exam";

-- Add missing columns to Question
ALTER TABLE "Question" ADD COLUMN "type" TEXT NOT NULL DEFAULT 'MCQ';

-- Recreate Question table to make options nullable
CREATE TABLE "Question_new" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'MCQ',
    "options" TEXT,
    "correctAnswer" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    CONSTRAINT "Question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO "Question_new" SELECT "id", "text", "type", "options", "correctAnswer", "examId" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "Question_new" RENAME TO "Question";

PRAGMA foreign_keys=ON;
