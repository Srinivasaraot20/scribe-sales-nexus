import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Brain, Calculator, Globe, Lightbulb, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'upsc',
    name: 'UPSC',
    description: 'Civil Services Examination preparation books',
    icon: Award,
    count: 45,
    color: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20'
  },
  {
    id: 'ssc',
    name: 'SSC',
    description: 'Staff Selection Commission exam books',
    icon: FileText,
    count: 32,
    color: 'bg-green-500/10 text-green-600 hover:bg-green-500/20'
  },
  {
    id: 'jee',
    name: 'JEE',
    description: 'Joint Entrance Examination preparation',
    icon: Calculator,
    count: 28,
    color: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20'
  },
  {
    id: 'neet',
    name: 'NEET',
    description: 'Medical entrance exam preparation',
    icon: Brain,
    count: 24,
    color: 'bg-red-500/10 text-red-600 hover:bg-red-500/20'
  },
  {
    id: 'gate',
    name: 'GATE',
    description: 'Graduate Aptitude Test in Engineering',
    icon: Lightbulb,
    count: 18,
    color: 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20'
  },
  {
    id: 'cat',
    name: 'CAT',
    description: 'Common Admission Test for MBA',
    icon: Globe,
    count: 15,
    color: 'bg-pink-500/10 text-pink-600 hover:bg-pink-500/20'
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Academic and reference books',
    icon: BookOpen,
    count: 42,
    color: 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Literature and language books',
    icon: Users,
    count: 36,
    color: 'bg-teal-500/10 text-teal-600 hover:bg-teal-500/20'
  }
];

export function Categories() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Book Categories</h1>
          <p className="text-muted-foreground">Explore books by subject and examination category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={`/books?category=${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{category.count} books</span>
                      <span className="text-xs text-primary font-medium group-hover:underline">
                        View Books →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}