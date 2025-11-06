-- ScholarConnect Database Schema for Supabase/PostgreSQL
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, -- In production, use proper hashing
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    instructor VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    category VARCHAR(100),
    duration VARCHAR(50),
    students INTEGER DEFAULT 0,
    level VARCHAR(50),
    rating DECIMAL(3, 2) DEFAULT 0.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- Assignments table
CREATE TABLE IF NOT EXISTS assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'submitted', 'graded')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_assignments_course_id ON assignments(course_id);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow all operations for now (adjust based on your security needs)
CREATE POLICY "Allow all operations on users" ON users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on courses" ON courses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on enrollments" ON enrollments FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on assignments" ON assignments FOR ALL USING (true) WITH CHECK (true);

-- Insert sample courses
INSERT INTO courses (title, instructor, description, image, category, duration, students, level, rating) VALUES
('Introduction to Computer Science', 'Dr. Jane Smith', 'Learn the fundamentals of computer science, algorithms, and programming concepts.', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Computer Science', '8 weeks', 1420, 'Beginner', 4.7),
('Advanced Data Structures', 'Prof. Michael Chen', 'Dive deep into advanced data structures and their applications in solving complex problems.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Programming', '10 weeks', 850, 'Advanced', 4.9),
('Introduction to Machine Learning', 'Dr. Sarah Johnson', 'Explore the basics of machine learning algorithms and their real-world applications.', 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'AI & ML', '12 weeks', 1280, 'Intermediate', 4.5),
('Web Development Bootcamp', 'Alex Rodriguez', 'Complete guide to modern web development including HTML, CSS, JavaScript, React, and Node.js.', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 'Web Dev', '14 weeks', 2100, 'Beginner', 4.8),
('Mobile App Development', 'Emily Chang', 'Learn to build native mobile applications for iOS and Android using React Native.', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'Mobile Dev', '10 weeks', 980, 'Intermediate', 4.6),
('Database Systems', 'Prof. David Wilson', 'Comprehensive course on database design, SQL, NoSQL, and data modeling techniques.', 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80', 'Database', '8 weeks', 750, 'Intermediate', 4.4),
('UI/UX Design Principles', 'Jessica Lee', 'Master the fundamentals of user interface and user experience design for digital products.', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80', 'Design', '6 weeks', 1050, 'Beginner', 4.7),
('Cloud Computing Fundamentals', 'Robert Martinez', 'Introduction to cloud services, deployment models, and architecture considerations.', 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Cloud', '8 weeks', 890, 'Intermediate', 4.5),
('Data Science with Python', 'Dr. Maria Garcia', 'Learn data analysis, visualization, and machine learning using Python libraries.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Data Science', '10 weeks', 1320, 'Intermediate', 4.8),
('Cybersecurity Essentials', 'Thomas Williams', 'Understand key concepts in network security, encryption, and threat prevention.', 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Security', '9 weeks', 760, 'Beginner', 4.6),
('Blockchain Technology', 'Daniel Kim', 'Explore the fundamentals of blockchain, smart contracts, and decentralized applications.', 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80', 'Blockchain', '8 weeks', 640, 'Intermediate', 4.3),
('Game Development with Unity', 'Christopher Nelson', 'Learn to create interactive 2D and 3D games using the Unity game engine.', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Game Dev', '12 weeks', 920, 'Beginner', 4.7)
ON CONFLICT DO NOTHING;

