import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Heart, Target, Eye } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Books Available', value: '10,000+', icon: BookOpen },
    { label: 'Happy Students', value: '50,000+', icon: Users },
    { label: 'Expert Authors', value: '500+', icon: Award },
    { label: 'Years of Experience', value: '10+', icon: Heart }
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We believe in providing high-quality educational resources that help students achieve their academic goals.',
      icon: Target
    },
    {
      title: 'Student Success',
      description: 'Our primary focus is on student success. We curate books that have proven track records of helping students excel.',
      icon: Award
    },
    {
      title: 'Accessibility',
      description: 'We strive to make quality educational content accessible to students from all backgrounds and regions.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About BookStore</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering students across India with comprehensive educational resources 
            for competitive exams and academic excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to quality educational resources and empower students 
                to achieve their academic and career aspirations through comprehensive, 
                well-curated study materials and expert guidance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted platform for educational content, 
                fostering a generation of well-prepared, confident students who excel 
                in their chosen fields and contribute meaningfully to society.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-8">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-4">
              <p>
                BookStore was founded with a simple yet powerful vision: to bridge the gap between 
                students and quality educational resources. Our journey began when we recognized 
                the challenges faced by students preparing for competitive exams across India.
              </p>
              <p>
                Starting with a small collection of UPSC preparation books, we have grown to become 
                a comprehensive platform offering resources for various competitive exams including 
                JEE, NEET, GATE, CAT, SSC, and many more. Our team works tirelessly to curate content 
                from the best authors and publishers in the field.
              </p>
              <p>
                Today, we serve thousands of students across the country, helping them achieve their 
                dreams through our carefully selected study materials, expert guidance, and 
                student-centric approach. We continue to evolve and expand our offerings to meet 
                the changing needs of modern education.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}