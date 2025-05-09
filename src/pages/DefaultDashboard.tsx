
import React from "react";
import { StatCard } from "../components/StatCard";
import { CreditCard, Users, UserPlus, ShoppingCart } from "lucide-react";

export default function DefaultDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Default Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400">Welcome to your dashboard overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Today's Money" 
          value="$53,000" 
          icon={<CreditCard size={20} />} 
          change="55%" 
          changeType="positive" 
          gradient="blue" 
        />
        <StatCard 
          title="Today's Users" 
          value="2,300" 
          icon={<Users size={20} />} 
          change="3%" 
          changeType="positive" 
          gradient="green" 
        />
        <StatCard 
          title="New Clients" 
          value="+3,462" 
          icon={<UserPlus size={20} />} 
          change="2%" 
          changeType="negative" 
          gradient="orange" 
        />
        <StatCard 
          title="Sales" 
          value="$103,430" 
          icon={<ShoppingCart size={20} />} 
          change="5%" 
          changeType="positive" 
          gradient="purple" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-card p-5">
          <h2 className="text-lg font-semibold mb-4">Sales by Country</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b dark:border-slate-700">
                  <th className="text-left py-3 px-2">Country</th>
                  <th className="text-left py-3 px-2">Sales</th>
                  <th className="text-left py-3 px-2">Value</th>
                  <th className="text-left py-3 px-2">Bounce</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-slate-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">United States</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">2,500</td>
                  <td className="py-3 px-2">$230,900</td>
                  <td className="py-3 px-2">29.9%</td>
                </tr>
                <tr className="border-b dark:border-slate-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Germany</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">3,900</td>
                  <td className="py-3 px-2">$440,000</td>
                  <td className="py-3 px-2">40.22%</td>
                </tr>
                <tr className="border-b dark:border-slate-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Great Britain</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">1,400</td>
                  <td className="py-3 px-2">$190,700</td>
                  <td className="py-3 px-2">23.44%</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Brazil</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">562</td>
                  <td className="py-3 px-2">$143,960</td>
                  <td className="py-3 px-2">32.14%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-card p-5">
          <h2 className="text-lg font-semibold mb-4">Active Users</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">36K</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-semibold text-green-600">+23%</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  from previous week
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-right">
                <p className="text-sm font-medium">Clicks</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">2M</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Sales</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">435</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Items</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">43</p>
              </div>
            </div>
          </div>
          <div className="h-48 flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400">Line chart will be here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
