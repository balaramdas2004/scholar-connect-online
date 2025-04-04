
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample course data - expanded from FeaturedCourses
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

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  
  const categories = ["All", "Computer Science", "Programming", "AI & ML", "Web Dev", "Mobile Dev", "Database", "Design", "Cloud", "Data Science", "Security", "Blockchain", "Game Dev"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = allCourses.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    
    // Level filter
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg max-w-3xl">
            Browse through our comprehensive collection of courses designed to help you achieve your academic and professional goals.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" /> 
                  Category
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary/10" : ""}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  Level
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {levels.map((level) => (
                  <DropdownMenuItem 
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={selectedLevel === level ? "bg-primary/10" : ""}
                  >
                    {level}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedLevel !== "All" && ` at ${selectedLevel} level`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
