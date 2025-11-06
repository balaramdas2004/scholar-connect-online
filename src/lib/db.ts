import { supabase, User, Course, Enrollment, Assignment } from './supabase';

// Fallback to localStorage if Supabase is not configured
const useLocalStorage = !supabase;

// User operations
export async function createUser(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> {
  if (useLocalStorage) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
  }

  try {
    const { data, error } = await supabase!
      .from('users')
      .insert([userData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  if (useLocalStorage) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((u: User) => u.email === email) || null;
  }

  try {
    const { data, error } = await supabase!
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function getAllUsers(): Promise<User[]> {
  if (useLocalStorage) {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  try {
    const { data, error } = await supabase!
      .from('users')
      .select('*');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

// Course operations
export async function getAllCourses(): Promise<Course[]> {
  if (useLocalStorage) {
    return JSON.parse(localStorage.getItem('courses') || '[]');
  }

  try {
    const { data, error } = await supabase!
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export async function getCourseById(id: string): Promise<Course | null> {
  if (useLocalStorage) {
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    return courses.find((c: Course) => c.id === id) || null;
  }

  try {
    const { data, error } = await supabase!
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

export async function createCourse(courseData: Omit<Course, 'id' | 'created_at'>): Promise<Course | null> {
  if (useLocalStorage) {
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    const newCourse = {
      id: Date.now().toString(),
      ...courseData,
      created_at: new Date().toISOString(),
    };
    courses.push(newCourse);
    localStorage.setItem('courses', JSON.stringify(courses));
    return newCourse;
  }

  try {
    const { data, error } = await supabase!
      .from('courses')
      .insert([courseData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating course:', error);
    return null;
  }
}

// Enrollment operations
export async function getEnrollmentsByUserId(userId: string): Promise<Enrollment[]> {
  if (useLocalStorage) {
    const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    return enrollments.filter((e: Enrollment) => e.user_id === userId);
  }

  try {
    const { data, error } = await supabase!
      .from('enrollments')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return [];
  }
}

export async function createEnrollment(enrollmentData: Omit<Enrollment, 'id' | 'created_at' | 'updated_at'>): Promise<Enrollment | null> {
  if (useLocalStorage) {
    const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    const newEnrollment = {
      id: Date.now().toString(),
      ...enrollmentData,
      progress: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    enrollments.push(newEnrollment);
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
    return newEnrollment;
  }

  try {
    const { data, error } = await supabase!
      .from('enrollments')
      .insert([{ ...enrollmentData, progress: 0 }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating enrollment:', error);
    return null;
  }
}

export async function updateEnrollmentProgress(enrollmentId: string, progress: number): Promise<boolean> {
  if (useLocalStorage) {
    const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    const index = enrollments.findIndex((e: Enrollment) => e.id === enrollmentId);
    if (index !== -1) {
      enrollments[index].progress = progress;
      enrollments[index].updated_at = new Date().toISOString();
      localStorage.setItem('enrollments', JSON.stringify(enrollments));
      return true;
    }
    return false;
  }

  try {
    const { error } = await supabase!
      .from('enrollments')
      .update({ progress, updated_at: new Date().toISOString() })
      .eq('id', enrollmentId);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error updating enrollment:', error);
    return false;
  }
}

// Clear all data (for reset)
export async function clearAllData(): Promise<void> {
  if (useLocalStorage) {
    localStorage.removeItem('users');
    localStorage.removeItem('courses');
    localStorage.removeItem('enrollments');
    localStorage.removeItem('assignments');
    localStorage.removeItem('currentUser');
    return;
  }

  try {
    // Clear Supabase tables
    await supabase!.from('enrollments').delete().neq('id', '0');
    await supabase!.from('assignments').delete().neq('id', '0');
    await supabase!.from('courses').delete().neq('id', '0');
    await supabase!.from('users').delete().neq('id', '0');
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

