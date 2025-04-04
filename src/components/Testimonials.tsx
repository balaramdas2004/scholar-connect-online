
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Computer Science Student",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "ScholarConnect has completely transformed my learning experience. The platform's intuitive interface and high-quality courses have helped me excel in my studies.",
  },
  {
    id: "2",
    name: "Maria Garcia",
    role: "Engineering Major",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The interactive assignments and real-time feedback from instructors have been invaluable. I've gained practical skills that I'm already applying in my internship.",
  },
  {
    id: "3",
    name: "David Kim",
    role: "Mathematics Student",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "Thanks to the advanced courses on ScholarConnect, I've been able to explore topics beyond my curriculum and develop a deeper understanding of complex concepts.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">What Our Students Say</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Hear from students who have experienced the power of our e-learning platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary opacity-50 mb-4" />
                
                <p className="text-gray-700 flex-grow mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
