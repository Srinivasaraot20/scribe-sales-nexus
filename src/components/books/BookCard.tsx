import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart,
  BookOpen,
  User,
  TrendingUp,
  Award
} from "lucide-react";
import { useState } from "react";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    subtitle?: string;
    category: string;
    price: number;
    vendor_price?: number;
    author_name: string;
    cover_image_url?: string;
    rating: number;
    total_reviews: number;
    total_sales: number;
    is_bestseller?: boolean;
    is_new?: boolean;
  };
  userRole?: 'publisher' | 'author' | 'vendor' | 'student';
  onAddToCart?: (bookId: string) => void;
  onViewDetails?: (bookId: string) => void;
  onToggleWishlist?: (bookId: string) => void;
  isInWishlist?: boolean;
}

export function BookCard({ 
  book, 
  userRole = 'student', 
  onAddToCart, 
  onViewDetails,
  onToggleWishlist,
  isInWishlist = false 
}: BookCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = async () => {
    if (!onAddToCart) return;
    setIsLoading(true);
    try {
      await onAddToCart(book.id);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'upsc': 'bg-purple-100 text-purple-800',
      'ssc': 'bg-blue-100 text-blue-800',
      'neet': 'bg-green-100 text-green-800',
      'jee': 'bg-orange-100 text-orange-800',
      'gate': 'bg-red-100 text-red-800',
      'cat': 'bg-yellow-100 text-yellow-800',
      'gmat': 'bg-indigo-100 text-indigo-800',
      'ielts': 'bg-pink-100 text-pink-800',
      'literature': 'bg-emerald-100 text-emerald-800',
      'academic': 'bg-slate-100 text-slate-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const renderPrice = () => {
    if (userRole === 'vendor' && book.vendor_price) {
      return (
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-vendor">
              {formatPrice(book.vendor_price)}
            </span>
            <Badge variant="outline" className="text-xs">Vendor Price</Badge>
          </div>
          <div className="text-sm text-muted-foreground line-through">
            MRP: {formatPrice(book.price)}
          </div>
        </div>
      );
    }
    
    return (
      <span className="text-lg font-bold text-primary">
        {formatPrice(book.price)}
      </span>
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-smooth bg-card border-border overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {!imageError && book.cover_image_url ? (
          <img
            src={book.cover_image_url}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <BookOpen className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {book.is_new && (
            <Badge className="bg-accent text-accent-foreground text-xs">NEW</Badge>
          )}
          {book.is_bestseller && (
            <Badge className="bg-warning text-warning-foreground text-xs flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>Bestseller</span>
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist?.(book.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background"
        >
          <Heart 
            className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
          />
        </button>

        {/* Quick View */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onViewDetails?.(book.id)}
            className="backdrop-blur-sm"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={`text-xs uppercase font-medium ${getCategoryColor(book.category)}`}
          >
            {book.category}
          </Badge>
          {book.total_sales > 100 && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3" />
              <span>{book.total_sales} sold</span>
            </div>
          )}
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-1">
          <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-smooth">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {book.subtitle}
            </p>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <User className="w-3 h-3" />
          <span>{book.author_name}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{book.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({book.total_reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="pt-2">
          {renderPrice()}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="flex-1"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </Button>
          <Button
            variant="outline"
            onClick={() => onViewDetails?.(book.id)}
            size="sm"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}