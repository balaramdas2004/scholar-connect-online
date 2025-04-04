
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample course data - same as in Courses.tsx
const allCourses: CourseProps[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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

// Category data mapping to show proper names
const categoryMap: { [key: string]: string } = {
  "1": "Computer Science",
  "2": "Programming",
  "3": "AI & ML",
  "4": "Web Dev",
  "5": "Mobile Dev",
  "6": "Database",
  "7": "Design",
  "8": "Cloud",
  "9": "Data Science",
  "10": "Security",
  "11": "Blockchain",
  "12": "Game Dev",
};

// Category descriptions
const categoryDescriptions: { [key: string]: string } = {
  "Computer Science": "Explore the fundamental principles of computation and processing information.",
  "Programming": "Learn to write code and develop software applications in various programming languages.",
  "AI & ML": "Discover artificial intelligence and machine learning techniques that power modern technology.",
  "Web Dev": "Master the skills needed to build responsive and dynamic websites and web applications.",
  "Mobile Dev": "Learn to create native and cross-platform mobile applications for iOS and Android.",
  "Database": "Understand database design, management, and optimization for efficient data storage.",
  "Design": "Explore principles of UI/UX design to create intuitive and attractive digital interfaces.",
  "Cloud": "Learn about cloud computing services and architectures for scalable applications.",
  "Data Science": "Analyze and interpret complex data using statistical methods and visualization techniques.",
  "Security": "Study cybersecurity principles to protect systems and data from vulnerabilities and threats.",
  "Blockchain": "Understand distributed ledger technology and its applications in various industries.",
  "Game Dev": "Design and develop interactive games for multiple platforms and devices.",
};

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryCourses, setCategoryCourses] = useState<CourseProps[]>([]);
  
  useEffect(() => {
    if (id) {
      // Get category name from the map or use the ID directly
      const name = categoryMap[id] || id;
      setCategoryName(name);
      
      // Filter courses by this category
      const filteredCourses = allCourses.filter(course => 
        course.category.toLowerCase() === name.toLowerCase()
      );
      setCategoryCourses(filteredCourses);
    }
  }, [id]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-2">
            <Link to="/courses" className="flex items-center text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all courses
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName} Courses</h1>
          <p className="text-lg max-w-3xl">
            {categoryDescriptions[categoryName] || 
             "Explore our selection of courses in this category designed to help you master new skills."}
          </p>
        </div>
      </div>
      
      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Available Courses</h2>
          
          {categoryCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No courses found in this category</h3>
              <p className="text-gray-600 mb-6">We're working on adding courses in this category soon!</p>
              <Button asChild>
                <Link to="/courses">Browse All Courses</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Related Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Explore Related Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(categoryMap)
              .filter(([_, name]) => name !== categoryName)
              .slice(0, 4)
              .map(([id, name]) => (
                <Link 
                  key={id} 
                  to={`/categories/${id}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="font-semibold text-lg mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{categoryDescriptions[name]}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Category;
