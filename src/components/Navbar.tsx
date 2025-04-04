
import { useState } from 'react';
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating auth state
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

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
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
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
          <Input 
            type="text" 
            placeholder="Search for courses..." 
            className="pl-9 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
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
          <div className="flex mx-auto mb-4">
            <Input 
              type="text" 
              placeholder="Search for courses..." 
              className="pl-9 pr-4 py-2 w-full"
            />
            <Search className="absolute left-7 top-[4.7rem] h-4 w-4 text-gray-500" />
          </div>
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
