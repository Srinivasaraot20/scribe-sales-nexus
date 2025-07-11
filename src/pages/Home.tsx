import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { BookCard } from "@/components/books/BookCard";
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  Star,
  Target,
  Shield,
  Zap,
  Crown,
  PenTool,
  Store,
  GraduationCap
} from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import { useToast } from "@/hooks/use-toast";

// Mock data for demo
const featuredBooks = [
  {
    id: '1',
    title: 'UPSC Civil Services Complete Guide 2024',
    subtitle: 'Comprehensive preparation for all three stages',
    category: 'upsc',
    price: 1299,
    vendor_price: 999,
    author_name: 'Dr. Rajesh Kumar',
    cover_image_url: null,
    rating: 4.8,
    total_reviews: 245,
    total_sales: 1250,
    is_bestseller: true,
    is_new: false
  },
  {
    id: '2',
    title: 'Advanced Mathematics for JEE Main & Advanced',
    subtitle: 'Complete theory with solved examples',
    category: 'jee',
    price: 899,
    vendor_price: 699,
    author_name: 'Prof. Anita Sharma',
    cover_image_url: null,
    rating: 4.6,
    total_reviews: 189,
    total_sales: 890,
    is_bestseller: false,
    is_new: true
  },
  {
    id: '3',
    title: 'NEET Biology Masterclass',
    subtitle: 'Essential concepts for medical entrance',
    category: 'neet',
    price: 749,
    vendor_price: 599,
    author_name: 'Dr. Priya Patel',
    cover_image_url: null,
    rating: 4.7,
    total_reviews: 156,
    total_sales: 654,
    is_bestseller: false,
    is_new: false
  },
  {
    id: '4',
    title: 'SSC CGL Complete Package',
    subtitle: 'All subjects with practice papers',
    category: 'ssc',
    price: 599,
    vendor_price: 449,
    author_name: 'Vikram Singh',
    cover_image_url: null,
    rating: 4.5,
    total_reviews: 298,
    total_sales: 1456,
    is_bestseller: true,
    is_new: false
  }
];

const stats = [
  { label: "Published Books", value: "10,000+", icon: BookOpen },
  { label: "Active Authors", value: "500+", icon: Users },
  { label: "Happy Students", value: "50,000+", icon: GraduationCap },
  { label: "Success Stories", value: "5,000+", icon: Award },
];

const features = [
  {
    icon: Target,
    title: "Exam-Focused Content",
    description: "Books specifically designed for competitive exams with latest patterns and syllabus."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every book goes through rigorous quality checks by subject matter experts."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick delivery across India with secure packaging and tracking."
  },
  {
    icon: Star,
    title: "Expert Authors",
    description: "Content created by experienced educators and successful candidates."
  }
];

const roleHighlights = [
  {
    icon: Crown,
    role: "Publishers",
    title: "Scale Your Publishing Business",
    description: "Comprehensive platform to manage books, authors, royalties, and sales with advanced analytics.",
    color: "publisher",
    features: ["Multi-author management", "Royalty automation", "Sales analytics", "Document management"]
  },
  {
    icon: PenTool,
    role: "Authors",
    title: "Focus on Writing, We Handle the Rest",
    description: "Submit manuscripts, track sales, manage royalties, and grow your readership effortlessly.",
    color: "author",
    features: ["Easy manuscript submission", "Real-time royalty tracking", "Sales insights", "Author profile"]
  },
  {
    icon: Store,
    role: "Vendors",
    title: "Bulk Purchase Made Simple",
    description: "Special vendor pricing, bulk order management, and streamlined inventory tracking.",
    color: "vendor",
    features: ["Wholesale pricing", "Bulk order tracking", "Inventory management", "Sales dashboard"]
  },
  {
    icon: GraduationCap,
    role: "Students",
    title: "Your Success, Our Mission",
    description: "Discover quality books, track your learning journey, and connect with a community of learners.",
    color: "student",
    features: ["Personalized recommendations", "Progress tracking", "Community reviews", "Wishlist & favorites"]
  }
];

export function Home() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState<'publisher' | 'author' | 'vendor' | 'student'>('student');
  const { toast } = useToast();

  const handleAddToCart = (bookId: string) => {
    toast({
      title: "Added to cart",
      description: "Book has been added to your cart successfully!",
      variant: "default"
    });
  };

  const handleViewDetails = (bookId: string) => {
    toast({
      title: "Coming soon",
      description: "Book details page is under development.",
    });
  };

  const handleToggleWishlist = (bookId: string) => {
    toast({
      title: "Added to wishlist",
      description: "Book has been saved to your wishlist!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} userRole={userRole} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 z-10" />
        <img 
          src={heroImage} 
          alt="Premium Books" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Premium Book
              <span className="block text-primary">Publication Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering publishers, authors, vendors, and students with a comprehensive platform for book publication, sales, and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/books">
                  Explore Books
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/auth">
                  Join Our Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our bestselling and newest publications across various competitive exam categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                userRole={userRole}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/books">
                View All Books
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose BookNexus?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for successful book publication and learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role-based Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Built for Every Role
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a publisher, author, vendor, or student, we have the tools you need to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roleHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-role-${highlight.color}/10 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-role-${highlight.color}`} />
                      </div>
                      <div>
                        <Badge variant="outline" className={`bg-role-${highlight.color}/10 text-role-${highlight.color} border-role-${highlight.color}/20 mb-2`}>
                          {highlight.role}
                        </Badge>
                        <CardTitle className="text-xl">{highlight.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{highlight.description}</p>
                    <ul className="space-y-2">
                      {highlight.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of publishers, authors, vendors, and students who trust BookNexus for their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/auth">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">BookNexus</h3>
                  <p className="text-sm opacity-80">Premium Publications</p>
                </div>
              </div>
              <p className="text-background/80 max-w-md">
                The complete platform for book publication, sales, and learning. Connecting publishers, authors, vendors, and students worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/books" className="hover:text-background transition-smooth">Browse Books</Link></li>
                <li><Link to="/categories" className="hover:text-background transition-smooth">Categories</Link></li>
                <li><Link to="/authors" className="hover:text-background transition-smooth">Authors</Link></li>
                <li><Link to="/about" className="hover:text-background transition-smooth">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/contact" className="hover:text-background transition-smooth">Contact Us</Link></li>
                <li><Link to="/help" className="hover:text-background transition-smooth">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-background transition-smooth">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-background transition-smooth">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 BookNexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}