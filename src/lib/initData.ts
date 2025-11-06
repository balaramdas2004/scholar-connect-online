// Initialize sample courses data for localStorage
// This will be used if Supabase is not configured

import { Course } from './supabase';

export const sampleCourses: Omit<Course, 'id' | 'created_at'>[] = [
  {
    title: "Introduction to Computer Science",
    instructor: "Dr. Jane Smith",
    description: "Learn the fundamentals of computer science, algorithms, and programming concepts.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Computer Science",
    duration: "8 weeks",
    students: 1420,
    level: "Beginner",
    rating: 4.7
  },
  {
    title: "Advanced Data Structures",
    instructor: "Prof. Michael Chen",
    description: "Dive deep into advanced data structures and their applications in solving complex problems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Programming",
    duration: "10 weeks",
    students: 850,
    level: "Advanced",
    rating: 4.9
  },
  {
    title: "Introduction to Machine Learning",
    instructor: "Dr. Sarah Johnson",
    description: "Explore the basics of machine learning algorithms and their real-world applications.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI & ML",
    duration: "12 weeks",
    students: 1280,
    level: "Intermediate",
    rating: 4.5
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Alex Rodriguez",
    description: "Complete guide to modern web development including HTML, CSS, JavaScript, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Web Dev",
    duration: "14 weeks",
    students: 2100,
    level: "Beginner",
    rating: 4.8
  },
  {
    title: "Mobile App Development",
    instructor: "Emily Chang",
    description: "Learn to build native mobile applications for iOS and Android using React Native.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Mobile Dev",
    duration: "10 weeks",
    students: 980,
    level: "Intermediate",
    rating: 4.6
  },
  {
    title: "Database Systems",
    instructor: "Prof. David Wilson",
    description: "Comprehensive course on database design, SQL, NoSQL, and data modeling techniques.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
    category: "Database",
    duration: "8 weeks",
    students: 750,
    level: "Intermediate",
    rating: 4.4
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Jessica Lee",
    description: "Master the fundamentals of user interface and user experience design for digital products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Design",
    duration: "6 weeks",
    students: 1050,
    level: "Beginner",
    rating: 4.7
  },
  {
    title: "Cloud Computing Fundamentals",
    instructor: "Robert Martinez",
    description: "Introduction to cloud services, deployment models, and architecture considerations.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Cloud",
    duration: "8 weeks",
    students: 890,
    level: "Intermediate",
    rating: 4.5
  },
  {
    title: "Data Science with Python",
    instructor: "Dr. Maria Garcia",
    description: "Learn data analysis, visualization, and machine learning using Python libraries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Data Science",
    duration: "10 weeks",
    students: 1320,
    level: "Intermediate",
    rating: 4.8
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Thomas Williams",
    description: "Understand key concepts in network security, encryption, and threat prevention.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Security",
    duration: "9 weeks",
    students: 760,
    level: "Beginner",
    rating: 4.6
  },
  {
    title: "Blockchain Technology",
    instructor: "Daniel Kim",
    description: "Explore the fundamentals of blockchain, smart contracts, and decentralized applications.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    category: "Blockchain",
    duration: "8 weeks",
    students: 640,
    level: "Intermediate",
    rating: 4.3
  },
  {
    title: "Game Development with Unity",
    instructor: "Christopher Nelson",
    description: "Learn to create interactive 2D and 3D games using the Unity game engine.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Game Dev",
    duration: "12 weeks",
    students: 920,
    level: "Beginner",
    rating: 4.7
  }
];

// Initialize courses in localStorage if not present
export function initializeCourses() {
  if (typeof window === 'undefined') return;
  
  const existingCourses = localStorage.getItem('courses');
  if (!existingCourses) {
    const coursesWithIds = sampleCourses.map((course, index) => ({
      ...course,
      id: `course-${index + 1}`,
      created_at: new Date().toISOString()
    }));
    localStorage.setItem('courses', JSON.stringify(coursesWithIds));
  }
}

// Initialize demo users if not present
export function initializeDemoUsers() {
  if (typeof window === 'undefined') return;
  
  const existingUsers = localStorage.getItem('users');
  if (!existingUsers) {
    const demoUsers = [
      { id: '1', email: 'user@example.com', password: 'password123', name: 'Demo User', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      { id: '2', email: 'admin@example.com', password: 'admin123', name: 'Admin User', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    ];
    localStorage.setItem('users', JSON.stringify(demoUsers));
  }
}

