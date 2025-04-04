
import { useState } from "react";
import CourseCard, { CourseProps } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample course data
const sampleCourses: CourseProps[] = [
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
  }
];

const FeaturedCourses = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const coursesPerPage = isMobile ? 1 : 3;
  const endIndex = startIndex + coursesPerPage;
  const visibleCourses = sampleCourses.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(sampleCourses.length - coursesPerPage, startIndex + 1));
  };

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
            <p className="text-muted-foreground mt-2">Explore our most popular courses</p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              disabled={endIndex >= sampleCourses.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild>
            <a href="/courses">View All Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
