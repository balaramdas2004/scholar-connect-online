
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        id: "q1",
        question: "How do I create an account on ScholarConnect?",
        answer: "To create an account, click on the 'Sign Up' button in the top-right corner of the homepage. Fill in your details including your name, email address, and password. Verify your email address through the confirmation link we'll send you, and your account will be ready to use."
      },
      {
        id: "q2",
        question: "Is ScholarConnect free to use?",
        answer: "ScholarConnect offers both free and premium courses. You can browse and access many free courses after creating an account. Premium courses require payment, either as a one-time purchase or through a subscription plan, depending on the course type."
      },
      {
        id: "q3",
        question: "What devices can I use to access ScholarConnect?",
        answer: "ScholarConnect is accessible on any device with an internet connection. You can use desktop computers, laptops, tablets, or smartphones. We have a responsive website that adapts to your screen size and also offer mobile apps for iOS and Android for a better mobile experience."
      }
    ]
  },
  {
    category: "Courses & Learning",
    questions: [
      {
        id: "q4",
        question: "How do I find courses that match my interests?",
        answer: "You can browse courses by category using our navigation menu, or use the search function to find specific topics. We also provide course recommendations based on your interests and previous learning history once you've created an account."
      },
      {
        id: "q5",
        question: "Can I download course materials for offline viewing?",
        answer: "Yes, most course materials are available for download so you can access them offline. Look for the download icon next to lectures, readings, or resources. Please note that downloading is only available for enrolled students and is subject to copyright restrictions."
      },
      {
        id: "q6",
        question: "How long do I have access to a course after purchase?",
        answer: "Once you purchase a course, you have lifetime access to the course materials. You can revisit the content as many times as you need, even after completing the course."
      },
      {
        id: "q7",
        question: "Are there any prerequisites for enrolling in courses?",
        answer: "Prerequisites vary by course. Each course page lists any necessary background knowledge or skills under the 'Requirements' section. Some courses are designed for beginners with no prior experience, while others may require foundational knowledge."
      }
    ]
  },
  {
    category: "Payments & Refunds",
    questions: [
      {
        id: "q8",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, and in some regions, bank transfers and mobile payment options like Apple Pay and Google Pay."
      },
      {
        id: "q9",
        question: "Do you offer refunds if I'm not satisfied with a course?",
        answer: "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment. Some specialized courses may have different refund policies, which will be clearly indicated on the course page."
      },
      {
        id: "q10",
        question: "Are there any discounts or financial aid available?",
        answer: "We regularly offer discounts and promotions throughout the year. We also have a financial aid program for students who demonstrate need. You can apply for financial aid through your account dashboard, and our team will review your application."
      }
    ]
  },
  {
    category: "Certificates & Credentials",
    questions: [
      {
        id: "q11",
        question: "Do I receive a certificate upon completing a course?",
        answer: "Yes, most courses offer a certificate of completion once you've successfully finished all required modules and assessments. Certificates can be downloaded directly from your dashboard and shared on LinkedIn or other social platforms."
      },
      {
        id: "q12",
        question: "Are ScholarConnect certificates recognized by employers?",
        answer: "Many employers recognize ScholarConnect certificates as evidence of your commitment to professional development and learning. Our partnerships with industry leaders and academic institutions enhance the credibility of our certificates."
      },
      {
        id: "q13",
        question: "How do I share my certificate with employers or on social media?",
        answer: "After earning a certificate, you can download it from your achievements page. Each certificate has sharing options for LinkedIn, Twitter, and Facebook, as well as a direct link you can include in your resume or portfolio. You can also print a physical copy for personal records."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        id: "q14",
        question: "What should I do if I experience technical issues?",
        answer: "If you encounter technical problems, first try refreshing your browser or clearing your cache and cookies. Check our help center for common troubleshooting steps. If issues persist, contact our support team through the 'Help' button in your dashboard or email support@scholarconnect.com."
      },
      {
        id: "q15",
        question: "How can I report a bug or suggest a feature?",
        answer: "We value your feedback! You can report bugs or suggest features through the feedback form in your account settings. Our product team regularly reviews user suggestions to improve the platform."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredFAQs(faqData);
      return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    
    // Filter categories and questions that match the search term
    const filtered = faqData.map(category => {
      const matchingQuestions = category.questions.filter(q => 
        q.question.toLowerCase().includes(searchLower) || 
        q.answer.toLowerCase().includes(searchLower)
      );
      
      if (matchingQuestions.length > 0) {
        return {
          ...category,
          questions: matchingQuestions
        };
      }
      return null;
    }).filter(Boolean) as typeof faqData;
    
    setFilteredFAQs(filtered);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Find answers to common questions about ScholarConnect, our courses, and how to get the most out of your learning experience.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
            <Button 
              type="submit"
              variant="secondary" 
              className="absolute right-0.5 top-0.5 bottom-0.5"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      
      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-b">
                      <AccordionTrigger className="text-left font-semibold py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No matching questions found</h3>
              <p className="text-gray-600 mb-4">Try different keywords or browse all categories below</p>
              <Button onClick={() => setFilteredFAQs(faqData)}>View All FAQs</Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact Support Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button variant="outline">
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
