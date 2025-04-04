import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  BookOpen, 
  BarChart, 
  CheckCircle,
  Star,
  Calendar,
  Award,
  Share2
} from "lucide-react";
import { CourseProps } from "@/components/CourseCard";
import { useToast } from "@/hooks/use-toast";

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
  }
  // ... other courses could be included here
];

// Extended course data with detailed information
interface ExtendedCourseData extends CourseProps {
  price: string;
  discount?: string;
  overview: string;
  objectives: string[];
  requirements: string[];
  modules: {
    title: string;
    duration: string;
    lessons: {
      title: string;
      duration: string;
      isPreviewAvailable?: boolean;
    }[];
  }[];
  instructorBio: string;
  instructorImage: string;
  reviews: {
    name: string;
    avatar: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

// Extended course details
const courseDetails: { [key: string]: Partial<ExtendedCourseData> } = {
  "1": {
    price: "$49.99",
    discount: "$79.99",
    overview: "This comprehensive course introduces you to the fundamental concepts of computer science. You'll learn about algorithms, data structures, computational thinking, and basic programming principles. The course is designed for beginners with no prior experience and will provide a solid foundation for further study in computer science or related fields.",
    objectives: [
      "Understand core computer science concepts and terminology",
      "Learn algorithmic thinking and problem-solving approaches",
      "Develop basic programming skills using Python",
      "Analyze and solve computational problems systematically",
      "Build a foundation for more advanced computer science courses"
    ],
    requirements: [
      "No prior programming or computer science knowledge required",
      "Basic mathematics skills (high school level algebra)",
      "A computer with internet access",
      "Willingness to engage in hands-on coding exercises"
    ],
    modules: [
      {
        title: "Introduction to Computational Thinking",
        duration: "2 hours",
        lessons: [
          { title: "What is Computer Science?", duration: "20 min", isPreviewAvailable: true },
          { title: "Problem-Solving Approaches", duration: "30 min" },
          { title: "Algorithms in Everyday Life", duration: "25 min" },
          { title: "Computational Thinking Process", duration: "45 min" }
        ]
      },
      {
        title: "Fundamentals of Programming",
        duration: "3 hours",
        lessons: [
          { title: "Introduction to Python", duration: "45 min", isPreviewAvailable: true },
          { title: "Variables and Data Types", duration: "30 min" },
          { title: "Basic Operators and Expressions", duration: "35 min" },
          { title: "Control Structures: Conditionals", duration: "40 min" },
          { title: "Control Structures: Loops", duration: "30 min" }
        ]
      },
      {
        title: "Data Structures and Algorithms",
        duration: "4 hours",
        lessons: [
          { title: "Introduction to Data Structures", duration: "40 min" },
          { title: "Lists and Arrays", duration: "45 min" },
          { title: "Dictionaries and Sets", duration: "35 min" },
          { title: "Algorithm Analysis Basics", duration: "50 min" },
          { title: "Searching Algorithms", duration: "30 min" },
          { title: "Sorting Algorithms", duration: "40 min" }
        ]
      }
    ],
    instructorBio: "Dr. Jane Smith is a computer science professor with over 15 years of teaching experience at prestigious universities. She specializes in algorithms, data structures, and computer science education. Dr. Smith has received numerous teaching awards and is passionate about making computer science accessible to beginners.",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    reviews: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "March 15, 2025",
        rating: 5,
        comment: "This course was exactly what I needed as a complete beginner. Dr. Smith explains complex concepts in such an approachable way. The exercises were challenging but not overwhelming."
      },
      {
        name: "Maria Garcia",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        date: "February 28, 2025",
        rating: 4,
        comment: "Great introduction to computer science fundamentals. The course structure is well-organized, and the Python examples helped me understand the concepts better. Would recommend!"
      },
      {
        name: "David Park",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        date: "January 10, 2025",
        rating: 5,
        comment: "As someone transitioning into tech, this course gave me a solid foundation to build upon. The instructor is knowledgeable and presents information clearly. The hands-on projects were invaluable."
      }
    ]
  },
  "2": {
    price: "$69.99",
    discount: "$99.99",
    overview: "Take your programming skills to the next level with this advanced course on data structures. You'll explore complex data structures and learn how to implement and optimize them for various applications. This course is designed for intermediate programmers who want to deepen their understanding of efficient data organization and manipulation.",
    objectives: [
      "Master advanced data structures like trees, graphs, and hash tables",
      "Analyze and optimize algorithm performance",
      "Implement complex data structures from scratch",
      "Apply appropriate data structures to solve programming challenges",
      "Understand memory management and optimization techniques"
    ],
    requirements: [
      "Intermediate programming experience in at least one language",
      "Basic knowledge of algorithm complexity (Big O notation)",
      "Familiarity with basic data structures (arrays, lists, stacks, queues)",
      "Strong problem-solving skills"
    ],
    modules: [
      {
        title: "Advanced Tree Structures",
        duration: "4 hours",
        lessons: [
          { title: "Binary Search Trees", duration: "45 min", isPreviewAvailable: true },
          { title: "AVL Trees and Rotations", duration: "50 min" },
          { title: "Red-Black Trees", duration: "55 min" },
          { title: "B-Trees and B+ Trees", duration: "50 min" },
          { title: "Trie Data Structures", duration: "40 min" }
        ]
      },
      {
        title: "Graph Theory and Implementations",
        duration: "5 hours",
        lessons: [
          { title: "Graph Representations", duration: "40 min", isPreviewAvailable: true },
          { title: "Graph Traversal Algorithms", duration: "55 min" },
          { title: "Shortest Path Algorithms", duration: "60 min" },
          { title: "Minimum Spanning Trees", duration: "50 min" },
          { title: "Network Flow Algorithms", duration: "55 min" }
        ]
      }
    ],
    instructorBio: "Prof. Michael Chen is a renowned computer scientist with expertise in algorithm design and data structures. He has worked at major tech companies and has contributed to various open-source projects focused on optimizing data processing techniques. Prof. Chen combines academic knowledge with real-world experience to teach practical, performance-oriented programming.",
    instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    reviews: [
      {
        name: "Jennifer Wu",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        date: "March 20, 2025",
        rating: 5,
        comment: "Exceptional deep dive into advanced data structures. Prof. Chen explains complex concepts clearly and provides practical implementation examples. The assignments were challenging and really reinforced the learning."
      },
      {
        name: "Robert Taylor",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        date: "March 5, 2025",
        rating: 4,
        comment: "Great course for anyone looking to level up their understanding of data structures. The content is rigorous but well-explained. I particularly appreciated the performance analysis sections."
      }
    ]
  },
  "3": {
    price: "$59.99",
    discount: "$89.99",
    overview: "This course provides a comprehensive introduction to machine learning concepts, algorithms, and applications. You'll learn the theoretical foundations of ML while gaining practical experience implementing various algorithms. By the end of the course, you'll be able to apply machine learning techniques to solve real-world problems.",
    objectives: [
      "Understand the fundamental concepts of machine learning",
      "Implement and train supervised and unsupervised learning algorithms",
      "Evaluate and improve model performance",
      "Apply machine learning techniques to real-world datasets",
      "Build a foundation for more advanced AI and machine learning studies"
    ],
    requirements: [
      "Basic programming knowledge (preferably Python)",
      "Fundamental understanding of statistics and probability",
      "Basic linear algebra and calculus concepts",
      "Familiarity with data analysis techniques is helpful but not required"
    ],
    modules: [
      {
        title: "Introduction to Machine Learning",
        duration: "3 hours",
        lessons: [
          { title: "What is Machine Learning?", duration: "35 min", isPreviewAvailable: true },
          { title: "Types of Machine Learning", duration: "40 min" },
          { title: "The Machine Learning Pipeline", duration: "45 min" },
          { title: "Data Preparation and Preprocessing", duration: "60 min" }
        ]
      },
      {
        title: "Supervised Learning",
        duration: "5 hours",
        lessons: [
          { title: "Linear Regression", duration: "50 min", isPreviewAvailable: true },
          { title: "Logistic Regression", duration: "45 min" },
          { title: "Decision Trees", duration: "55 min" },
          { title: "Support Vector Machines", duration: "60 min" },
          { title: "Neural Networks Basics", duration: "70 min" }
        ]
      }
    ],
    instructorBio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence and machine learning. She has published numerous academic papers and has worked on cutting-edge ML projects in both academic and industry settings. Dr. Johnson is known for her ability to explain complex concepts in an accessible way, making her an exceptional educator in this rapidly evolving field.",
    instructorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww",
    reviews: [
      {
        name: "Michael Brown",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        date: "March 18, 2025",
        rating: 5,
        comment: "This course exceeded my expectations. Dr. Johnson breaks down complex ML concepts into digestible parts, and the practical examples helped cement my understanding. Highly recommended for anyone interested in machine learning."
      },
      {
        name: "Lisa Chen",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        date: "February 25, 2025",
        rating: 4,
        comment: "Great introduction to machine learning. The course provides a good balance of theory and practice. I particularly enjoyed the hands-on projects that let me apply what I learned to real datasets."
      }
    ]
  }
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [details, setDetails] = useState<Partial<ExtendedCourseData> | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      // Find basic course info
      const foundCourse = allCourses.find(c => c.id === id);
      if (foundCourse) {
        setCourse(foundCourse);
        
        // Get detailed information
        const detailedInfo = courseDetails[id] || {};
        setDetails(detailedInfo);
      }
    }
  }, [id]);
  
  const handleEnroll = () => {
    toast({
      title: "Enrollment Successful!",
      description: `You've been enrolled in ${course?.title}. Check your email for details.`,
    });
  };
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    toast({
      title: "Link Copied!",
      description: "Course link copied to clipboard. Share with your friends!",
    });
  };
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Course not found</h2>
            <Button asChild>
              <Link to="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Course Header */}
      <div 
        className="bg-cover bg-center relative" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${course.image})`,
          height: "400px"
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="absolute top-4 left-4">
            <Link 
              to="/courses" 
              className="flex items-center text-white bg-black/20 hover:bg-black/40 transition-colors px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link>
          </div>
          
          <div className="text-white mt-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-primary/90">{course.category}</Badge>
              <Badge variant="secondary">{course.level}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg max-w-3xl mb-6">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1.5" />
                {course.students.toLocaleString()} students
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1.5 fill-yellow-400 text-yellow-400" />
                {course.rating} rating
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                Last updated: March 2025
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                <TabsTrigger 
                  value="overview" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-primary py-3 px-5"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="curriculum" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-primary py-3 px-5"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger 
                  value="instructor" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-primary py-3 px-5"
                >
                  Instructor
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-primary py-3 px-5"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-gray-700 mb-6">
                    {details?.overview || course.description}
                  </p>
                  
                  {details?.objectives && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {details.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {details?.requirements && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {details.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="mt-0">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="mb-4">
                    <p className="text-gray-700">
                      {details?.modules?.length || 0} modules • {details?.modules?.reduce((acc, module) => 
                        acc + module.lessons.length, 0
                      ) || 0} lessons • 
                      {" "}{course.duration} total length
                    </p>
                  </div>
                  
                  {details?.modules?.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="mb-4 border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4">
                        <h3 className="font-semibold">Module {moduleIndex + 1}: {module.title}</h3>
                        <p className="text-sm text-gray-600">{module.duration} • {module.lessons.length} lessons</p>
                      </div>
                      <div className="divide-y">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 flex justify-between items-center">
                            <div className="flex items-start">
                              <span className="text-gray-600 mr-3">{moduleIndex + 1}.{lessonIndex + 1}</span>
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-gray-600">{lesson.duration}</p>
                              </div>
                            </div>
                            {lesson.isPreviewAvailable && (
                              <Button variant="outline" size="sm">Preview</Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-0">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={details?.instructorImage || "https://via.placeholder.com/150"} 
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Award className="h-4 w-4" />
                        <span>Expert Instructor</span>
                      </div>
                      <p className="text-gray-700">
                        {details?.instructorBio || 
                         `${course.instructor} is an experienced educator specializing in ${course.category}.`}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Student Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= course.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{course.rating} course rating</span>
                    </div>
                  </div>
                  
                  {details?.reviews ? (
                    <div className="space-y-6">
                      {details.reviews.map((review, index) => (
                        <div key={index} className="border-b pb-6 last:border-0">
                          <div className="flex items-center mb-3">
                            <img 
                              src={review.avatar} 
                              alt={review.name} 
                              className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <StarRating rating={review.rating} />
                                <span className="text-gray-500 text-sm">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No reviews yet for this course.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Enrollment Card */}
          <div>
            <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-20">
              <div className="mb-4">
                {details?.discount ? (
                  <div className="flex items-center mb-1">
                    <span className="text-3xl font-bold">{details.price}</span>
                    <span className="ml-2 text-gray-500 line-through">{details.discount}</span>
                    <Badge className="ml-2 bg-green-600">
                      {Math.round((1 - (parseFloat(details.price.substring(1)) / 
                               parseFloat(details.discount.substring(1)))) * 100)}% OFF
                    </Badge>
                  </div>
                ) : (
                  <div className="text-3xl font-bold mb-1">
                    {details?.price || "$59.99"}
                  </div>
                )}
                <p className="text-gray-600 text-sm">Limited time offer</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <Button onClick={handleEnroll} className="w-full">Enroll Now</Button>
                <Button variant="outline" className="w-full">Add to Wishlist</Button>
              </div>
              
              <div className="mb-6">
                <p className="text-center text-sm text-gray-600 mb-2">30-Day Money-Back Guarantee</p>
                <p className="text-center text-sm text-gray-600">Full Lifetime Access</p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">This course includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                    {details?.modules?.reduce((acc, module) => 
                      acc + module.lessons.length, 0
                    ) || "Multiple"} on-demand lessons
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    {course.duration} of content
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-gray-500" />
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-gray-500" />
                    Certificate of completion
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="ghost" 
                  onClick={handleShare}
                  className="text-sm"
                >
                  <Share2 className="h-4 w-4 mr-1.5" />
                  Share this course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
