import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ShoppingCart, 
  User, 
  Search,
  Menu,
  X,
  Crown,
  PenTool,
  Store,
  GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NavbarProps {
  user?: any;
  userRole?: 'publisher' | 'author' | 'vendor' | 'student';
  cartCount?: number;
}

const roleIcons = {
  publisher: Crown,
  author: PenTool,
  vendor: Store,
  student: GraduationCap,
};

const roleColors = {
  publisher: "publisher",
  author: "author", 
  vendor: "vendor",
  student: "student",
} as const;

export function Navbar({ user, userRole = 'student', cartCount = 0 }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const RoleIcon = roleIcons[userRole];

  const handleAuthAction = () => {
    if (user) {
      navigate(`/dashboard/${userRole}`);
    } else {
      navigate('/auth');
    }
  };

  const handleCartClick = () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to sign in to view your cart",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }
    navigate('/cart');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-hero rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-smooth">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-foreground">BookNexus</h1>
              <p className="text-xs text-muted-foreground -mt-1">Premium Publications</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/books" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Browse Books
            </Link>
            <Link 
              to="/categories" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Categories
            </Link>
            <Link 
              to="/authors" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Authors
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search books, authors, categories..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="relative p-2 text-foreground hover:text-primary transition-smooth group"
            >
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-smooth" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                  {cartCount}
                </Badge>
              )}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-3">
                <Button
                  variant={roleColors[userRole]}
                  size="sm"
                  onClick={handleAuthAction}
                  className="hidden sm:flex items-center space-x-2"
                >
                  <RoleIcon className="w-4 h-4" />
                  <span className="capitalize">{userRole} Dashboard</span>
                </Button>
                <div className="sm:hidden">
                  <Button
                    variant={roleColors[userRole]}
                    size="icon"
                    onClick={handleAuthAction}
                  >
                    <RoleIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                  Sign In
                </Button>
                <Button variant="default" size="sm" onClick={() => navigate('/auth')}>
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/books" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Books
              </Link>
              <Link 
                to="/categories" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/authors" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Authors
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Search */}
              <div className="relative lg:hidden">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}