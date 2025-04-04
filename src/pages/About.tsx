
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { UserPlus, Award, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About ScholarConnect</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering students with accessible, high-quality education since 2023
          </p>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ScholarConnect, we believe that quality education should be accessible to everyone. 
                Our mission is to connect students with the best instructors and resources across 
                various academic disciplines, creating a vibrant learning community that fosters 
                growth, innovation, and academic excellence.
              </p>
              <p className="text-lg text-gray-700">
                We're dedicated to breaking down barriers to education by offering a versatile 
                platform that accommodates different learning styles, paces, and preferences, 
                ensuring every student can reach their full potential.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10,000+</h3>
                <p className="text-gray-600">Active Students</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">250+</h3>
                <p className="text-gray-600">Expert Instructors</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">500+</h3>
                <p className="text-gray-600">Courses Available</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">50+</h3>
                <p className="text-gray-600">Partner Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & CEO",
                bio: "Former university dean with 15+ years in educational innovation",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
              },
              {
                name: "Prof. Michael Chen",
                role: "Chief Academic Officer",
                bio: "Leading researcher in educational technology and curriculum design",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww"
              },
              {
                name: "Emily Rodriguez",
                role: "Director of Student Success",
                bio: "Specializes in creating supportive learning environments for all students",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww"
              },
              {
                name: "David Wilson",
                role: "CTO",
                bio: "Tech innovator with expertise in creating accessible digital learning platforms",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Educational Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're a student eager to learn, an instructor with knowledge to share, 
            or an institution looking to partner with us, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-blue-50">
              Become a Student
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Apply as an Instructor
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
