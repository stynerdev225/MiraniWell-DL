#!/usr/bin/env node
/**
 * Production Build Script for Miriani Well
 * Handles database setup and seeding for Vercel deployments
 */

console.log("🚀 Starting production database setup...");

const main = async () => {
  try {
    // Skip database setup if not in production or missing required env vars
    if (!process.env.DATABASE_URL) {
      console.log("⏭️ Skipping database setup - DATABASE_URL not set");
      return;
    }

    if (!process.env.DATABASE_URL.includes("postgresql")) {
      console.log("⏭️ Skipping database setup - not using PostgreSQL");
      return;
    }

    // Dynamic imports to avoid issues if packages aren't available
    const { neon } = await import("@neondatabase/serverless");

    console.log("📊 Connecting to production database...");
    const sql = neon(process.env.DATABASE_URL);
    
    // Simple database connection test
    await sql`SELECT 1 as test`;
    console.log("✅ Database connection successful");

    // Create tables using raw SQL for better compatibility
    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        image_src TEXT NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS units (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        "order" INTEGER NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS lessons (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        unit_id INTEGER REFERENCES units(id) ON DELETE CASCADE,
        "order" INTEGER NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS challenges (
        id SERIAL PRIMARY KEY,
        lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
        type TEXT NOT NULL CHECK (type IN ('SELECT', 'ASSIST')),
        question TEXT NOT NULL,
        "order" INTEGER NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS challenge_options (
        id SERIAL PRIMARY KEY,
        challenge_id INTEGER REFERENCES challenges(id) ON DELETE CASCADE,
        text TEXT NOT NULL,
        correct BOOLEAN NOT NULL,
        image_src TEXT,
        audio_src TEXT
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS challenge_progress (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        challenge_id INTEGER REFERENCES challenges(id) ON DELETE CASCADE,
        completed BOOLEAN NOT NULL DEFAULT false
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS user_progress (
        user_id TEXT PRIMARY KEY,
        user_name TEXT NOT NULL DEFAULT 'User',
        user_image_src TEXT NOT NULL DEFAULT '/mascot.svg',
        active_course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        hearts INTEGER NOT NULL DEFAULT 5,
        points INTEGER NOT NULL DEFAULT 0
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS user_subscription (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL UNIQUE,
        stripe_customer_id TEXT NOT NULL UNIQUE,
        stripe_subscription_id TEXT NOT NULL UNIQUE,
        stripe_price_id TEXT NOT NULL,
        stripe_current_period_end INTEGER
      )
    `;

    console.log("🗄️ Database tables created successfully");

    // Check if we need to seed initial data
    const existingCourses = await sql`SELECT COUNT(*) as count FROM courses`;
    const courseCount = parseInt(existingCourses[0].count);

    if (courseCount === 0) {
      console.log("🌱 Seeding initial course data...");
      
      await sql`
        INSERT INTO courses (title, image_src) VALUES 
        ('Spanish', '/es.svg'),
        ('French', '/fr.svg'),
        ('Italian', '/it.svg'),
        ('German', '/de.svg')
      `;

      // Get the Spanish course ID and create wellness content
      const spanishCourse = await sql`SELECT id FROM courses WHERE title = 'Spanish' LIMIT 1`;
      const courseId = spanishCourse[0].id;

      await sql`
        INSERT INTO units (title, description, course_id, "order") VALUES 
        ('Mindfulness Basics', 'Learn fundamental wellness practices', ${courseId}, 1),
        ('Emotional Healing', 'Process and heal emotions', ${courseId}, 2)
      `;

      const units = await sql`SELECT id FROM units WHERE course_id = ${courseId} ORDER BY "order"`;
      const unit1Id = units[0].id;
      const unit2Id = units[1].id;

      await sql`
        INSERT INTO lessons (title, unit_id, "order") VALUES 
        ('Breathing Meditation', ${unit1Id}, 1),
        ('Body Awareness', ${unit1Id}, 2),
        ('Emotional Release', ${unit2Id}, 1),
        ('Heart Healing', ${unit2Id}, 2)
      `;

      const lessons = await sql`SELECT id FROM lessons ORDER BY id`;
      
      // Add challenges for each lesson
      for (let i = 0; i < lessons.length; i++) {
        const lessonId = lessons[i].id;
        await sql`
          INSERT INTO challenges (lesson_id, type, question, "order") VALUES 
          (${lessonId}, 'SELECT', 'What is the first step in mindful breathing?', 1),
          (${lessonId}, 'SELECT', 'How do you feel after this practice?', 2)
        `;
      }

      console.log("✅ Wellness content seeded successfully");
    } else {
      console.log(`✅ Database already contains ${courseCount} courses`);
    }


    console.log("🎉 Production database setup complete!");
    
  } catch (error) {
    console.error("❌ Error setting up production database:", error);
    // Don't exit with error code to allow build to continue
    console.log("⚠️ Continuing build despite database setup error");
  }
};

main();
