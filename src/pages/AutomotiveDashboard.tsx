import React from "react";
import { Battery, Car, Calendar, MapPin, CircleDot } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

// Mock Data
const vehicleStatusData = [
  { name: "Battery Health", value: "99%", icon: <Battery className="h-5 w-5" />, trend: "up", color: "green", detail: "Excellent condition" },
  { name: "Engine Health", value: "92%", icon: <Car className="h-5 w-5" />, trend: "up", color: "green", detail: "Good performance" },
  { name: "Tire Pressure", value: "34 PSI", icon: <CircleDot className="h-5 w-5" />, trend: "stable", color: "blue", detail: "All tires normal" },
  { name: "Gas Level", value: "34%", icon: <Car className="h-5 w-5" />, trend: "down", color: "red", detail: "Fill up soon" },
];

const maintenanceData = [
  { id: 1, task: "Oil Change", date: "2025-02-15", status: "Completed", icon: <Car className="h-4 w-4" />, color: "green", notes: "Used synthetic oil" },
  { id: 2, task: "Battery Check", date: "2025-03-20", status: "Upcoming", icon: <Battery className="h-4 w-4" />, color: "blue", notes: "Scheduled service" },
  { id: 3, task: "Brake Inspection", date: "2025-01-05", status: "Completed", icon: <CircleDot className="h-4 w-4" />, color: "green", notes: "Replaced brake pads" },
  { id: 4, task: "Tire Rotation", date: "2025-04-10", status: "Upcoming", icon: <CircleDot className="h-4 w-4" />, color: "blue", notes: "Due for rotation" },
  { id: 5, task: "Annual Service", date: "2025-06-22", status: "Overdue", icon: <Car className="h-4 w-4" />, color: "red", notes: "Full inspection required" },
];

const tripHistoryData = [
  { id: 1, name: "Morning Commute", distance: "12.5 mi", duration: "25 min", fuel: "0.5 gal", avgSpeed: "30 mph" },
  { id: 2, name: "Grocery Run", distance: "5.2 mi", duration: "15 min", fuel: "0.2 gal", avgSpeed: "24 mph" },
  { id: 3, name: "Weekend Trip", distance: "120 mi", duration: "2 hr 10 min", fuel: "3.8 gal", avgSpeed: "55 mph" },
  { id: 4, name: "Airport Pickup", distance: "28.3 mi", duration: "45 min", fuel: "1.1 gal", avgSpeed: "38 mph" },
  { id: 5, name: "School Drop-off", distance: "3.7 mi", duration: "12 min", fuel: "0.15 gal", avgSpeed: "22 mph" },
];

const performanceData = {
  weekly: [
    { day: "Mon", speed: 45, braking: 12, acceleration: 20 },
    { day: "Tue", speed: 52, braking: 15, acceleration: 25 },
    { day: "Wed", speed: 48, braking: 10, acceleration: 22 },
    { day: "Thu", speed: 61, braking: 18, acceleration: 30 },
    { day: "Fri", speed: 55, braking: 14, acceleration: 28 },
    { day: "Sat", speed: 42, braking: 8, acceleration: 18 },
    { day: "Sun", speed: 38, braking: 6, acceleration: 15 },
  ],
  monthly: [
    { week: "Week 1", speed: 49, braking: 12, acceleration: 23 },
    { week: "Week 2", speed: 52, braking: 14, acceleration: 25 },
    { week: "Week 3", speed: 54, braking: 15, acceleration: 26 },
    { week: "Week 4", speed: 48, braking: 11, acceleration: 22 },
  ],
};

const gasUsageData = [
  { week: "Week 1", volume: 12.5, cost: 45.5, efficiency: 28.4 },
  { week: "Week 2", volume: 10.2, cost: 37.2, efficiency: 30.1 },
  { week: "Week 3", volume: 15.8, cost: 57.7, efficiency: 26.8 },
  { week: "Week 4", volume: 8.9, cost: 32.5, efficiency: 32.5 },
];

const serviceShopsData = [
  { id: 1, name: "AutoCare Center", rating: 4.8, distance: "2.3 mi", type: "Full Service" },
  { id: 2, name: "Tire Express", rating: 4.5, distance: "3.8 mi", type: "Tire Service" },
  { id: 3, name: "EV Specialists", rating: 4.9, distance: "5.2 mi", type: "Electric Service" },
  { id: 4, name: "Quick Lube", rating: 4.2, distance: "1.5 mi", type: "Oil Change" },
];

const AutomotiveDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Automotive Dashboard</h1>
      
      {/* 2.1 Top Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vehicleStatusData.map((item, index) => (
          <Card key={index} className={`shadow-md border-l-4 ${item.color === 'red' ? 'border-red-500' : item.color === 'green' ? 'border-green-500' : 'border-blue-500'}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className={`p-2 rounded-md ${item.color === 'red' ? 'bg-red-100 text-red-500' : item.color === 'green' ? 'bg-green-100 text-green-500' : 'bg-blue-100 text-blue-500'}`}>
                  {item.icon}
                </div>
                <div className={`text-xs font-medium ${item.trend === 'up' ? 'text-green-500' : item.trend === 'down' ? 'text-red-500' : 'text-blue-500'}`}>
                  {item.trend === 'up' ? '↑ Increasing' : item.trend === 'down' ? '↓ Decreasing' : '→ Stable'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-sm text-muted-foreground">{item.name}</p>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {/* 2.2 Vehicle Profile Section */}
          <Card className="shadow-md mb-6">
            <CardHeader>
              <CardTitle>Vehicle Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=600&auto=format&fit=crop" 
                  alt="Tesla Model S" 
                  className="h-40 object-cover rounded-md"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model:</span>
                  <span className="font-medium">Tesla Model S</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Maintenance:</span>
                  <span className="font-medium">January 15, 2025</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License Plate:</span>
                  <span className="font-medium">TS-48392</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VIN:</span>
                  <span className="font-medium">5YJ3E1EA1LF...</span>
                </div>
                <div className="flex justify-center mt-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Use
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2.3 Maintenance Timeline */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Maintenance Timeline</CardTitle>
              <CardDescription>Recent and upcoming service events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-8">
                {maintenanceData.map((item, index) => (
                  <div key={item.id} className={`mb-6 last:mb-0 animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute left-0 mt-1.5">
                      <div className={`p-1 rounded-full
                        ${item.status === 'Completed' ? 'bg-green-100 text-green-500' :
                          item.status === 'Upcoming' ? 'bg-blue-100 text-blue-500' :
                          'bg-red-100 text-red-500'}`
                      }>
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{item.task}</h4>
                      <div className="flex justify-between">
                        <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                        <span className={`text-xs font-medium
                          ${item.status === 'Completed' ? 'text-green-500' :
                            item.status === 'Upcoming' ? 'text-blue-500' :
                            'text-red-500'}`
                        }>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs mt-1">{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {/* 2.4 Driving Stats / Trip History */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Trip History</CardTitle>
              <CardDescription>Recent driving activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-medium">Trip Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Distance</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Duration</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Fuel Used</th>
                      <th className="text-left py-3 px-2 text-sm font-medium">Avg. Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tripHistoryData.map((trip) => (
                      <tr key={trip.id} className="border-b">
                        <td className="py-3 px-2">{trip.name}</td>
                        <td className="py-3 px-2">{trip.distance}</td>
                        <td className="py-3 px-2">{trip.duration}</td>
                        <td className="py-3 px-2">{trip.fuel}</td>
                        <td className="py-3 px-2">{trip.avgSpeed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 2.5 Performance Line Chart */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Performance Analysis</CardTitle>
              <CardDescription>Speed and driving patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weekly">
                <TabsList className="grid grid-cols-2 w-[200px] mb-4">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                
                <TabsContent value="weekly" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData.weekly}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line type="monotone" dataKey="speed" stroke="#0f6fde" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      <Line type="monotone" dataKey="braking" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="acceleration" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="monthly" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData.monthly}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line type="monotone" dataKey="speed" stroke="#0f6fde" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      <Line type="monotone" dataKey="braking" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="acceleration" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* 2.6 Gas Usage Chart */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Gas Usage</CardTitle>
              <CardDescription>Weekly fuel consumption and efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gasUsageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="volume" name="Volume (gal)" fill="#0f6fde" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="left" dataKey="cost" name="Cost ($)" fill="#f97316" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" dataKey="efficiency" name="Efficiency (mpg)" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2.7 Nearby Service Shops */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Nearby Service Shops</CardTitle>
            <CardDescription>Recommended repair facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceShopsData.map((shop) => (
                <Card key={shop.id} className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{shop.name}</CardTitle>
                    <CardDescription className="flex items-center text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {shop.distance}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.floor(shop.rating) ? "text-yellow-500" : "text-gray-300"}`} 
                              fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-xs">{shop.rating}</span>
                      </div>
                      <span className="ml-auto text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                        {shop.type}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <button className="w-full bg-primary text-primary-foreground text-xs py-1 px-2 rounded hover:bg-primary/90 transition">
                      Book Appointment
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 2.8 Vehicle Tracker Map */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Vehicle Tracker</CardTitle>
            <CardDescription>Current location of your vehicle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-200 dark:bg-slate-800 rounded-md h-[300px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm">Map integration requires API key</p>
                <p className="text-xs text-muted-foreground mt-2">Connect your mapping service to enable live tracking</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 border shadow-md rounded-md">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center text-xs">
            <div className="w-2 h-2 mr-1" style={{ backgroundColor: entry.color || entry.stroke }}></div>
            <span>{entry.name}: </span>
            <span className="font-medium ml-1">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default AutomotiveDashboard;
