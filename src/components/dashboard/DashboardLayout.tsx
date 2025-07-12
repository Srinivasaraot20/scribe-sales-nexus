import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  PenTool, 
  Store, 
  GraduationCap,
  TrendingUp,
  DollarSign,
  Users,
  BookOpen
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  user: any;
  userRole: 'publisher' | 'author' | 'vendor' | 'student';
  stats?: {
    totalRevenue?: number;
    totalBooks?: number;
    totalOrders?: number;
    totalUsers?: number;
    monthlyGrowth?: number;
  };
}

const roleConfig = {
  publisher: {
    icon: Crown,
    title: "Publisher Dashboard",
    description: "Manage your entire publication empire",
    color: "publisher",
    bgGradient: "from-purple-50 to-blue-50"
  },
  author: {
    icon: PenTool,
    title: "Author Portal",
    description: "Track your books and royalties",
    color: "author",
    bgGradient: "from-orange-50 to-red-50"
  },
  vendor: {
    icon: Store,
    title: "Vendor Hub",
    description: "Manage bulk orders and inventory",
    color: "vendor",
    bgGradient: "from-green-50 to-emerald-50"
  },
  student: {
    icon: GraduationCap,
    title: "Student Dashboard",
    description: "Your learning journey continues",
    color: "student",
    bgGradient: "from-blue-50 to-indigo-50"
  }
};

export function DashboardLayout({ children, user, userRole, stats }: DashboardLayoutProps) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const config = roleConfig[userRole];
  const RoleIcon = config.icon;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const renderStatsCards = () => {
    if (!stats) return null;

    const statCards = [];

    if (userRole === 'publisher') {
      statCards.push(
        <Card key="revenue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue || 0)}</div>
            {stats.monthlyGrowth && (
              <p className="text-xs text-muted-foreground">
                +{stats.monthlyGrowth}% from last month
              </p>
            )}
          </CardContent>
        </Card>,
        <Card key="users">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">
              Across all roles
            </p>
          </CardContent>
        </Card>
      );
    }

    if (['publisher', 'author'].includes(userRole)) {
      statCards.push(
        <Card key="books">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === 'publisher' ? 'Published Books' : 'My Books'}
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBooks || 0}</div>
            <p className="text-xs text-muted-foreground">
              {userRole === 'publisher' ? 'Total catalog' : 'Active publications'}
            </p>
          </CardContent>
        </Card>
      );
    }

    statCards.push(
      <Card key="orders">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {userRole === 'student' ? 'My Orders' : 'Total Orders'}
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalOrders || 0}</div>
          <p className="text-xs text-muted-foreground">
            {userRole === 'student' ? 'Books purchased' : 'All time'}
          </p>
        </CardContent>
      </Card>
    );

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Dashboard Header */}
      <div className={`bg-gradient-to-r ${config.bgGradient} border-b border-border`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-role-${config.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <RoleIcon className="w-8 h-8 text-role-${config.color}-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">
                  {config.title}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {config.description}
                </p>
              </div>
            </div>
            <Badge 
              variant="outline" 
              className={`bg-role-${config.color}/10 text-role-${config.color} border-role-${config.color}/20 capitalize`}
            >
              {userRole}
            </Badge>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderStatsCards()}
        {children}
      </div>
    </div>
  );
}