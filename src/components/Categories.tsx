
import { Book, Code, Database, Globe, Cpu, LineChart, Notebook, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "1",
    name: "Computer Science",
    icon: Cpu,
    color: "bg-blue-100 text-blue-600",
    count: 42
  },
  {
    id: "2",
    name: "Web Development",
    icon: Globe,
    color: "bg-purple-100 text-purple-600",
    count: 36
  },
  {
    id: "3",
    name: "Data Science",
    icon: LineChart,
    color: "bg-green-100 text-green-600", 
    count: 28
  },
  {
    id: "4",
    name: "Programming",
    icon: Code,
    color: "bg-amber-100 text-amber-600",
    count: 54
  },
  {
    id: "5",
    name: "Database",
    icon: Database,
    color: "bg-red-100 text-red-600",
    count: 19
  },
  {
    id: "6",
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    color: "bg-indigo-100 text-indigo-600",
    count: 23
  },
  {
    id: "7",
    name: "Academic Writing",
    icon: Notebook,
    color: "bg-cyan-100 text-cyan-600",
    count: 15
  },
  {
    id: "8",
    name: "Education",
    icon: Book,
    color: "bg-orange-100 text-orange-600",
    count: 31
  }
];

const Categories = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Browse by Category</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Explore our wide range of courses across different categories to find the right one for you
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-center">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} Courses</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
