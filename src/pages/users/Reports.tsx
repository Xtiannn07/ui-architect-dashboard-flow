import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "../../components/StatCard";
import { Users, MousePointer, ShoppingCart, Heart } from "lucide-react";

const Reports = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Reports</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Users Active" 
          value="3,624" 
          icon={<Users size={20} />} 
          change="12%" 
          changeType="positive" 
          gradient="blue" 
        />
        <StatCard 
          title="Click Events" 
          value="42,589" 
          icon={<MousePointer size={20} />} 
          change="8%" 
          changeType="positive" 
          gradient="green" 
        />
        <StatCard 
          title="Purchases" 
          value="1,849" 
          icon={<ShoppingCart size={20} />} 
          change="-3%" 
          changeType="negative" 
          gradient="orange" 
        />
        <StatCard 
          title="Likes" 
          value="11,238" 
          icon={<Heart size={20} />} 
          change="24%" 
          changeType="positive" 
          gradient="purple" 
        />
      </div>

      {/* Reviews Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Reviews Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">75%</div>
              <div className="text-sm text-green-600 dark:text-green-400">Positive</div>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15%</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Neutral</div>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">10%</div>
              <div className="text-sm text-red-600 dark:text-red-400">Negative</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Reviews Table */}
      <Card>
        <CardHeader>
          <CardTitle>User Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">User</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Sentiment</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Date Employed</th>
                  <th className="text-left py-3 px-4">ID</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "John Doe",
                    role: "Developer",
                    sentiment: "positive",
                    email: "john@example.com",
                    dateEmployed: "2023-01-15",
                    id: "USR001"
                  },
                  {
                    name: "Jane Smith",
                    role: "Designer",
                    sentiment: "neutral",
                    email: "jane@example.com",
                    dateEmployed: "2023-02-20",
                    id: "USR002"
                  },
                  {
                    name: "Mike Johnson",
                    role: "Manager",
                    sentiment: "positive",
                    email: "mike@example.com",
                    dateEmployed: "2023-03-10",
                    id: "USR003"
                  }
                ].map((user, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs
                        ${user.sentiment === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                          user.sentiment === 'negative' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                          'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'}`}>
                        {user.sentiment}
                      </span>
                    </td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.dateEmployed}</td>
                    <td className="py-3 px-4">{user.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;