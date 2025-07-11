import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Plus,
  FileText,
  Settings,
  BarChart3,
  Crown
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function PublisherDashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalBooks: 0,
    totalOrders: 0,
    totalUsers: 0,
    monthlyGrowth: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchUserData();
    fetchStats();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUser(user);

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setProfile(profile);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchStats = async () => {
    try {
      // Mock data for demo - in real app, these would be actual database queries
      setStats({
        totalRevenue: 2450000,
        totalBooks: 247,
        totalOrders: 1523,
        totalUsers: 8947,
        monthlyGrowth: 12.5
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (!user || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Crown className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p>Loading publisher dashboard...</p>
        </div>
      </div>
    );
  }

  if (profile.role !== 'publisher') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You don't have publisher privileges to access this dashboard.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <DashboardLayout user={user} userRole="publisher" stats={stats}>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="authors">Authors</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="royalties">Royalties</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col space-y-2">
                  <BookOpen className="w-6 h-6" />
                  <span>Add Book</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2">
                  <Users className="w-6 h-6" />
                  <span>Manage Authors</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2">
                  <DollarSign className="w-6 h-6" />
                  <span>Process Royalties</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Order #ORD{1000 + i}</p>
                        <p className="text-sm text-muted-foreground">₹{(Math.random() * 5000 + 500).toFixed(0)}</p>
                      </div>
                      <Badge variant="outline">Processing</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Selling Books</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "UPSC Complete Guide 2024", sales: 145 },
                    { title: "JEE Advanced Mathematics", sales: 98 },
                    { title: "NEET Biology Masterclass", sales: 87 }
                  ].map((book, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{book.title}</p>
                        <p className="text-sm text-muted-foreground">{book.sales} sales this month</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="books">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Book Management</CardTitle>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Book
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Book management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authors">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Author Management</CardTitle>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Invite Author
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Author management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Order management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="royalties">
          <Card>
            <CardHeader>
              <CardTitle>Royalty Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Royalty management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Document Management</CardTitle>
              <Button>
                <FileText className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Document management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}