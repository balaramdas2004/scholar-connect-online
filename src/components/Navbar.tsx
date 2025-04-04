
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

// Demo course data for search
const DEMO_COURSES = [
  { id: 1, title: 'Introduction to React', category: 'Web Development' },
  { id: 2, title: 'Advanced JavaScript Patterns', category: 'Programming' },
  { id: 3, title: 'Python for Data Science', category: 'Data Science' },
  { id: 4, title: 'UI/UX Design Principles', category: 'Design' },
  { id: 5, title: 'Machine Learning Basics', category: 'Artificial Intelligence' },
  { id: 6, title: 'Cloud Computing Fundamentals', category: 'Cloud' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof DEMO_COURSES>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [userName, setUserName] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is logged in on component mount
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.isLoggedIn) {
        setIsLoggedIn(true);
        setUserName(userData.name || 'User');
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim().length === 0) {
      setShowSearchResults(false);
      return;
    }

    // Filter courses based on search query
    const filtered = DEMO_COURSES.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered);
    setShowSearchResults(true);
    
    if (filtered.length === 0) {
      toast({
        title: "No Results",
        description: `No courses found for "${searchQuery}"`,
      });
    } else {
      toast({
        title: "Search Results",
        description: `Found ${filtered.length} courses for "${searchQuery}"`,
      });
    }
  };

  const navigateToCourse = (courseId: number) => {
    setShowSearchResults(false);
    setSearchQuery('');
    navigate(`/courses/${courseId}`);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">ScholarConnect</span>
        </Link>

        {/* Search - hidden on mobile */}
        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input 
              type="text" 
              placeholder="Search for courses..." 
              className="pl-9 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Button 
              type="submit" 
              size="sm" 
              className="absolute right-1 top-1 h-8"
              variant="ghost"
            >
              Search
            </Button>
          </form>
          
          {/* Search results dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full w-full bg-white shadow-lg rounded-md mt-1 p-2 border z-50">
              <div className="flex justify-between items-center mb-2 pb-1 border-b">
                <span className="font-medium text-sm">Search Results</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowSearchResults(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <ul>
                {searchResults.map(course => (
                  <li key={course.id} className="py-1">
                    <button
                      className="w-full text-left px-2 py-1.5 hover:bg-gray-100 rounded-md transition-colors flex items-start"
                      onClick={() => navigateToCourse(course.id)}
                    >
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-gray-500">{course.category}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/courses" 
            className={`px-3 py-2 ${
              location.pathname === '/courses' 
                ? 'text-primary font-medium' 
                : 'text-gray-700 hover:text-primary'
            } transition-colors`}
          >
            Courses
          </Link>
          <Link 
            to="/about" 
            className={`px-3 py-2 ${
              location.pathname === '/about' 
                ? 'text-primary font-medium' 
                : 'text-gray-700 hover:text-primary'
            } transition-colors`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 ${
              location.pathname === '/contact' 
                ? 'text-primary font-medium' 
                : 'text-gray-700 hover:text-primary'
            } transition-colors`}
          >
            Contact
          </Link>
          <Link 
            to="/faq" 
            className={`px-3 py-2 ${
              location.pathname === '/faq' 
                ? 'text-primary font-medium' 
                : 'text-gray-700 hover:text-primary'
            } transition-colors`}
          >
            FAQ
          </Link>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <div className="text-sm font-medium py-1">Hi, {userName}!</div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={handleLogin}>
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90" onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <form onSubmit={handleSearch} className="flex mx-auto mb-4 relative">
            <Input 
              type="text" 
              placeholder="Search for courses..." 
              className="pl-9 pr-16 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Button 
              type="submit" 
              size="sm" 
              className="absolute right-1 top-1 h-8"
              variant="ghost"
            >
              Search
            </Button>
          </form>
          
          {/* Search results for mobile */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="bg-white shadow-inner rounded-md mt-1 p-2 border mb-4">
              <div className="flex justify-between items-center mb-2 pb-1 border-b">
                <span className="font-medium text-sm">Search Results</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowSearchResults(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <ul>
                {searchResults.map(course => (
                  <li key={course.id} className="py-1">
                    <button
                      className="w-full text-left px-2 py-1.5 hover:bg-gray-100 rounded-md transition-colors flex items-start"
                      onClick={() => {
                        navigateToCourse(course.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-gray-500">{course.category}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-col space-y-3">
            <Link 
              to="/courses" 
              className={`px-3 py-2 ${
                location.pathname === '/courses' 
                  ? 'text-primary font-medium' 
                  : 'text-gray-700 hover:text-primary'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 ${
                location.pathname === '/about' 
                  ? 'text-primary font-medium' 
                  : 'text-gray-700 hover:text-primary'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 ${
                location.pathname === '/contact' 
                  ? 'text-primary font-medium' 
                  : 'text-gray-700 hover:text-primary'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className={`px-3 py-2 ${
                location.pathname === '/faq' 
                  ? 'text-primary font-medium' 
                  : 'text-gray-700 hover:text-primary'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            {isLoggedIn ? (
              <>
                <div className="px-3 py-2 font-medium">Hi, {userName}!</div>
                <Link 
                  to="/dashboard" 
                  className="px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    localStorage.removeItem('currentUser');
                    setIsLoggedIn(false);
                    setIsMenuOpen(false);
                    toast({
                      title: "Logged Out",
                      description: "You have been successfully logged out.",
                    });
                    navigate('/');
                  }}
                  className="flex items-center mt-2"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/login');
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/signup');
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
