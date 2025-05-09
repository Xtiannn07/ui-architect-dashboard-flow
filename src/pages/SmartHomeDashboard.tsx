
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
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
  Legend,
  AreaChart,
  Area
} from 'recharts';

const deviceStatusCards = [
  { 
    name: "Lights On", 
    value: "12", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ), 
    trend: "up", 
    color: "green", 
    tooltip: "2 more than yesterday" 
  },
  { 
    name: "Temperature", 
    value: "22°C", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      </svg>
    ), 
    trend: "stable", 
    color: "blue", 
    tooltip: "Ideal comfort level" 
  },
  { 
    name: "Cameras Active", 
    value: "5", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14.5 4h-5L7 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3l-2.5-3Z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ), 
    trend: "stable", 
    color: "blue", 
    tooltip: "All cameras operational" 
  },
  { 
    name: "WiFi Devices", 
    value: "17", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <line x1="12" x2="12" y1="20" y2="20" />
      </svg>
    ), 
    trend: "up", 
    color: "green", 
    tooltip: "3 new devices connected" 
  }
];

const temperatureData = [
  { time: '00:00', temperature: 21, outside: 18 },
  { time: '03:00', temperature: 20, outside: 17 },
  { time: '06:00', temperature: 22, outside: 19 },
  { time: '09:00', temperature: 24, outside: 22 },
  { time: '12:00', temperature: 25, outside: 25 },
  { time: '15:00', temperature: 24, outside: 24 },
  { time: '18:00', temperature: 23, outside: 21 },
  { time: '21:00', temperature: 22, outside: 20 },
];

const roomLights = [
  { id: 1, name: "Living Room", status: false },
  { id: 2, name: "Bedroom", status: true },
  { id: 3, name: "Kitchen", status: false },
  { id: 4, name: "Garage", status: false },
];

const cameras = [
  { 
    id: 1, 
    location: "Front Door", 
    status: "Live", 
    lastMotion: "2 min ago", 
    quality: "HD",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop"
  },
  { 
    id: 2, 
    location: "Backyard", 
    status: "Live", 
    lastMotion: "17 min ago", 
    quality: "HD",
    thumbnail: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=400&auto=format&fit=crop"
  },
  { 
    id: 3, 
    location: "Garage", 
    status: "Offline", 
    lastMotion: "N/A", 
    quality: "SD",
    thumbnail: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=400&auto=format&fit=crop&sat=20"
  },
  { 
    id: 4, 
    location: "Driveway", 
    status: "Recording", 
    lastMotion: "Now", 
    quality: "HD",
    thumbnail: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=400&auto=format&fit=crop"
  }
];

const energyData = [
  { day: 'Mon', lighting: 2.3, hvac: 5.4, kitchen: 3.2, other: 1.8 },
  { day: 'Tue', lighting: 2.1, hvac: 4.8, kitchen: 3.8, other: 2.0 },
  { day: 'Wed', lighting: 2.5, hvac: 5.2, kitchen: 2.9, other: 1.9 },
  { day: 'Thu', lighting: 2.2, hvac: 5.7, kitchen: 3.3, other: 2.2 },
  { day: 'Fri', lighting: 2.8, hvac: 6.1, kitchen: 4.0, other: 2.5 },
  { day: 'Sat', lighting: 3.2, hvac: 6.8, kitchen: 4.2, other: 3.1 },
  { day: 'Sun', lighting: 3.0, hvac: 6.5, kitchen: 3.9, other: 2.8 },
];

const smartDevices = [
  { id: 1, name: "Living Room Speaker", type: "Speaker", status: "Online", lastActive: "2 min ago", battery: 92 },
  { id: 2, name: "Bedroom Thermostat", type: "Thermostat", status: "Online", lastActive: "Active now", battery: 78 },
  { id: 3, name: "Kitchen Display", type: "Display", status: "Online", lastActive: "15 min ago", battery: 45 },
  { id: 4, name: "Outdoor Camera", type: "Camera", status: "Online", lastActive: "Active now", battery: 85 },
  { id: 5, name: "Doorbell", type: "Security", status: "Offline", lastActive: "3 hours ago", battery: 12 },
  { id: 6, name: "Motion Sensor", type: "Sensor", status: "Online", lastActive: "1 hour ago", battery: 60 },
];

const SmartHomeDashboard = () => {
  const [lightStates, setLightStates] = useState(roomLights);

  const toggleLight = (id: number) => {
    setLightStates(prevStates => 
      prevStates.map(light => 
        light.id === id ? { ...light, status: !light.status } : light
      )
    );
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Smart Home Dashboard</h1>
      
      {/* 3.1 Smart Home Devices Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deviceStatusCards.map((item, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className={`p-2 rounded-md ${item.color === 'green' ? 'bg-green-100 text-green-500' : 'bg-blue-100 text-blue-500'}`}>
                  {item.icon}
                </div>
                <div className={`text-xs font-medium ${item.trend === 'up' ? 'text-green-500' : item.trend === 'down' ? 'text-red-500' : 'text-blue-500'}`}>
                  {item.trend === 'up' ? '↑ Increasing' : item.trend === 'down' ? '↓ Decreasing' : '→ Stable'}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-sm text-muted-foreground">{item.name}</p>
              <div className="text-xs text-muted-foreground mt-2">{item.tooltip}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* 3.2 Temperature Control Chart */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Temperature Trends</CardTitle>
              <CardDescription>Indoor vs. outdoor temperature over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip content={<SmartHomeTooltip />} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="temperature" 
                      name="Indoor (°C)" 
                      stroke="#0f6fde" 
                      fill="#0f6fde" 
                      fillOpacity={0.2} 
                      activeDot={{ r: 6 }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="outside" 
                      name="Outdoor (°C)" 
                      stroke="#f97316" 
                      fill="#f97316" 
                      fillOpacity={0.1} 
                      activeDot={{ r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* 3.5 Energy Consumption Panel */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Energy Consumption</CardTitle>
              <CardDescription>Daily usage breakdown by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<SmartHomeTooltip />} />
                    <Legend />
                    <Bar dataKey="lighting" name="Lighting" stackId="a" fill="#0f6fde" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="hvac" name="HVAC" stackId="a" fill="#22c55e" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="kitchen" name="Kitchen" stackId="a" fill="#f97316" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="other" name="Other" stackId="a" fill="#6b46c1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm">Daily Goal: 15 kWh</div>
                <div className="text-sm">Average: 14.2 kWh</div>
              </div>
              <Progress value={82} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* 3.3 Lighting Control Panel */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Lighting Control</CardTitle>
              <CardDescription>Manage your home lighting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {lightStates.map((light) => (
                <div key={light.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${light.status ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span>{light.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{light.status ? 'ON' : 'OFF'}</span>
                    <Switch 
                      checked={light.status} 
                      onCheckedChange={() => toggleLight(light.id)} 
                      className={light.status ? 'bg-green-500' : ''}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 3.6 Smart Devices Cards */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Smart Devices</CardTitle>
              <CardDescription>Connected device status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {smartDevices.map((device) => (
                  <Card key={device.id} className={`bg-muted/50 ${device.status === 'Offline' ? 'border-red-200' : ''}`}>
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-sm">{device.name}</h4>
                          <p className="text-xs text-muted-foreground">{device.type}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${device.status === 'Online' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {device.status}
                        </span>
                      </div>
                      <div className="mt-2 flex justify-between items-center text-xs text-muted-foreground">
                        <span>{device.lastActive}</span>
                        <span className={`${device.battery < 20 ? 'text-red-500' : ''}`}>
                          Battery: {device.battery}%
                        </span>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <button className="text-xs bg-primary/10 text-primary hover:bg-primary/20 py-1 px-2 rounded">
                          Settings
                        </button>
                        <button className="text-xs bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 py-1 px-2 rounded">
                          Restart
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 3.4 Security Cameras Feed Cards */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Security Cameras</CardTitle>
          <CardDescription>Live feed from home cameras</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cameras.map((camera) => (
              <div key={camera.id} className="relative rounded-md overflow-hidden">
                <img 
                  src={camera.thumbnail} 
                  alt={camera.location} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-2 left-2 flex items-center">
                  <span className={`w-2 h-2 rounded-full ${camera.status === 'Live' ? 'bg-green-500' : camera.status === 'Recording' ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></span>
                  <span className={`text-xs font-medium ml-1 text-white ${camera.status === 'Recording' ? 'text-red-300' : ''}`}>
                    {camera.status}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                    {camera.quality}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-medium text-sm">{camera.location}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white/80 text-xs">
                      {camera.status !== 'Offline' ? camera.lastMotion : 'Unavailable'}
                    </span>
                    <button className="bg-white/20 hover:bg-white/30 rounded p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Custom tooltip for charts
const SmartHomeTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 border shadow-md rounded-md">
        <p className="font-medium text-sm">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center text-xs mt-1">
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

export default SmartHomeDashboard;
