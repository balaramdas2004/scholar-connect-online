
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Unlock Your Learning Potential with ScholarConnect
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Access quality courses, expert instructors, and interactive learning experiences tailored for college students.
            </p>
            
            <div className="mt-8 relative max-w-md mx-auto md:mx-0">
              <Input
                type="text"
                placeholder="What do you want to learn?"
                className="pl-10 py-6 text-gray-900 border-0 shadow-lg"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Button className="absolute right-1 top-1 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Expert Instructors</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Interactive Content</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">Course Certificates</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-8 text-gray-500">
            <p className="font-medium">Trusted by top colleges and universities:</p>
            <span className="font-bold text-gray-700">Harvard University</span>
            <span className="font-bold text-gray-700">MIT</span>
            <span className="font-bold text-gray-700">Stanford</span>
            <span className="font-bold text-gray-700">UC Berkeley</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
