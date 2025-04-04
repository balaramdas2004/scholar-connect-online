
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Start Your Learning Journey?</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Join thousands of students already learning on ScholarConnect. 
            Get access to our library of courses and start your educational journey today.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-blue-50" asChild>
              <Link to="/courses">Sign Up for Free</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-blue-100">
            No credit card required. Start with our free courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
