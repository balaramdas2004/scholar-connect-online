import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Using localStorage fallback.');
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types
export interface User {
  id?: string;
  email: string;
  name: string;
  password?: string; // In production, this should be hashed
  created_at?: string;
  updated_at?: string;
}

export interface Course {
  id?: string;
  title: string;
  instructor: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  level: string;
  rating: number;
  created_at?: string;
}

export interface Enrollment {
  id?: string;
  user_id: string;
  course_id: string;
  progress: number;
  created_at?: string;
  updated_at?: string;
}

export interface Assignment {
  id?: string;
  course_id: string;
  title: string;
  description?: string;
  due_date: string;
  status: 'pending' | 'submitted' | 'graded';
  created_at?: string;
}

