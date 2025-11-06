
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
}

const CourseCard: React.FC<CourseProps> = ({
  id,
  title,
  instructor,
  description,
  image,
  category,
  duration,
  students,
  level,
  rating
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="overflow-hidden course-card card-3d depth-shadow-hover lighting-effect">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader className="p-4">
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="text-sm text-muted-foreground">by {instructor}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <Badge variant="outline" className={`${getLevelColor(level)}`}>
            {level}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {students}
          </div>
        </div>
        <Button asChild size="sm">
          <Link to={`/courses/${id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
