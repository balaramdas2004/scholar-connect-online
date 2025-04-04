
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  LayoutDashboard, 
  LogOut, 
  Settings, 
  User 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Sample data
const enrolledCourses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    instructor: "Dr. Jane Smith",
    progress: 75,
    nextLesson: "Algorithm Complexity Analysis",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    instructor: "Alex Rodriguez",
    progress: 40,
    nextLesson: "Advanced CSS Layouts",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "3",
    title: "Introduction to Machine Learning",
    instructor: "Dr. Sarah Johnson",
    progress: 10,
    nextLesson: "Supervised Learning Methods",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  }
];

const assignments = [
  {
    id: "1",
    title: "Algorithm Implementation",
    course: "Introduction to Computer Science",
    dueDate: "2023-04-15T23:59:59",
    status: "submitted"
  },
  {
    id: "2",
    title: "Portfolio Website",
    course: "Web Development Bootcamp",
    dueDate: "2023-04-20T23:59:59",
    status: "pending"
  },
  {
    id: "3",
    title: "Data Preprocessing",
    course: "Introduction to Machine Learning",
    dueDate: "2023-04-25T23:59:59",
    status: "pending"
  }
];

const announcements = [
  {
    id: "1",
    title: "New Course Materials Available",
    date: "2023-04-02T14:30:00",
    course: "Introduction to Computer Science",
    message: "New lecture slides and practice problems for Algorithm Complexity Analysis have been added."
  },
  {
    id: "2",
    title: "Assignment Deadline Extended",
    date: "2023-04-01T09:15:00",
    course: "Web Development Bootcamp",
    message: "The deadline for the Portfolio Website assignment has been extended by 48 hours."
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Format date to display in a readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Calculate if an assignment is due soon (within 3 days)
  const isDueSoon = (dateString: string) => {
    const dueDate = new Date(dateString);
    const now = new Date();
    const diffTime = dueDate.getTime() - now.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays <= 3 && diffDays > 0;
  };
  
  // Calculate if an assignment is overdue
  const isOverdue = (dateString: string) => {
    const dueDate = new Date(dateString);
    const now = new Date();
    return dueDate < now;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="Student" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Button 
                  variant={activeTab === "overview" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button 
                  variant={activeTab === "courses" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("courses")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Courses
                </Button>
                <Button 
                  variant={activeTab === "assignments" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("assignments")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Assignments
                </Button>
                <Button 
                  variant={activeTab === "announcements" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("announcements")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Announcements
                </Button>
                <Button 
                  variant={activeTab === "calendar" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("calendar")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
                <Button 
                  variant={activeTab === "profile" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button 
                  variant={activeTab === "settings" ? "default" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
              
              <div className="mt-6 pt-6 border-t">
                <Button variant="outline" className="w-full justify-start text-gray-500" asChild>
                  <Link to="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </Button>
              </div>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1">
              <TabsContent value="overview" className="mt-0">
                <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {assignments.filter(a => a.status === "pending").length}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(
                          enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / 
                          enrolledCourses.length
                        )}%
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        
                        <div className="mt-4 flex items-start space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Next Lesson</p>
                            <p className="text-sm font-medium">{course.nextLesson}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Continue Learning</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Upcoming Assignments</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {assignments.filter(a => a.status === "pending").map((assignment) => (
                        <div key={assignment.id} className="flex justify-between items-center">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full 
                              ${isOverdue(assignment.dueDate) ? 'bg-red-100' : 
                                isDueSoon(assignment.dueDate) ? 'bg-amber-100' : 'bg-green-100'}`}>
                              <FileText className={`h-5 w-5 
                                ${isOverdue(assignment.dueDate) ? 'text-red-500' : 
                                  isDueSoon(assignment.dueDate) ? 'text-amber-500' : 'text-green-500'}`} />
                            </div>
                            <div>
                              <p className="font-medium">{assignment.title}</p>
                              <p className="text-sm text-muted-foreground">{assignment.course}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-medium 
                              ${isOverdue(assignment.dueDate) ? 'text-red-500' : 
                                isDueSoon(assignment.dueDate) ? 'text-amber-500' : 'text-gray-500'}`}>
                              Due: {formatDate(assignment.dueDate)}
                            </p>
                            {isOverdue(assignment.dueDate) && (
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Overdue</span>
                            )}
                            {!isOverdue(assignment.dueDate) && isDueSoon(assignment.dueDate) && (
                              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Due Soon</span>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {assignments.filter(a => a.status === "pending").length === 0 && (
                        <div className="text-center py-4">
                          <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
                          <p>All caught up! No pending assignments.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Only rendering the Overview content for now */}
              {activeTab !== "overview" && (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h2 className="text-xl font-semibold mb-4 capitalize">{activeTab}</h2>
                  <p className="text-muted-foreground">
                    This section is under development. Check back soon for updates!
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
