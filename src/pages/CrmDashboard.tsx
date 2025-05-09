
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowDown, 
  ArrowUp, 
  Calendar, 
  ChartLineUp, 
  CircleDollarSign, 
  Smile, 
  Users,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import { TopMetricsCard } from "../components/crm/TopMetricsCard";
import { SalesChart } from "../components/crm/SalesChart";
import { UsersDonutChart } from "../components/crm/UsersDonutChart";
import { ProductsTable } from "../components/crm/ProductsTable";
import { ActivitiesTimeline } from "../components/crm/ActivitiesTimeline";
import { SupportOverview } from "../components/crm/SupportOverview";
import { TeamPerformance } from "../components/crm/TeamPerformance";
import { TasksList } from "../components/crm/TasksList";

const CrmDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">CRM Dashboard</h1>
      
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TopMetricsCard 
          title="Revenue"
          value="$43,596"
          change="+15%"
          changeType="positive"
          icon={<CircleDollarSign className="h-5 w-5" />}
          description="Monthly revenue performance"
          accentColor="bg-green-500"
        />
        <TopMetricsCard 
          title="Profit"
          value="$9,602"
          change="+3%"
          changeType="positive"
          icon={<ChartLineUp className="h-5 w-5" />}
          description="Comparison with last period"
          accentColor="bg-blue-500"
        />
        <TopMetricsCard 
          title="Customer Satisfaction"
          value="94%"
          change="+2%"
          changeType="positive"
          icon={<Smile className="h-5 w-5" />}
          description="Overall rating"
          accentColor="bg-yellow-500"
        />
        <TopMetricsCard 
          title="New Customers"
          value="321"
          change="-5%"
          changeType="negative"
          icon={<Users className="h-5 w-5" />}
          description="Weekly acquisition"
          accentColor="bg-purple-500"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 Width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sales Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly performance data</CardDescription>
              </div>
              <Tabs defaultValue="month">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>Products with highest revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ProductsTable />
            </CardContent>
          </Card>

          {/* Team Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Sales and support metrics by team member</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamPerformance />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1/3 Width */}
        <div className="space-y-6">
          {/* Users Donut Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
              <CardDescription>Distribution by user type</CardDescription>
            </CardHeader>
            <CardContent>
              <UsersDonutChart />
            </CardContent>
          </Card>

          {/* Support Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>Ticket statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <SupportOverview />
            </CardContent>
          </Card>

          {/* Activities Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest system events</CardDescription>
            </CardHeader>
            <CardContent>
              <ActivitiesTimeline />
            </CardContent>
          </Card>

          {/* Tasks List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Your upcoming tasks</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <TasksList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrmDashboard;
