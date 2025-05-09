
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  unitsSold: number;
  revenue: number;
  change: {
    value: string;
    type: 'positive' | 'negative';
  };
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Premium CRM Plan",
    category: "Software",
    unitsSold: 423,
    revenue: 42300,
    change: { value: "+12%", type: "positive" }
  },
  {
    id: 2,
    name: "Marketing Automation",
    category: "Service",
    unitsSold: 285,
    revenue: 28500,
    change: { value: "+8%", type: "positive" }
  },
  {
    id: 3,
    name: "Sales Training Course",
    category: "Training",
    unitsSold: 189,
    revenue: 18900,
    change: { value: "-3%", type: "negative" }
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    category: "Software",
    unitsSold: 156,
    revenue: 15600,
    change: { value: "+15%", type: "positive" }
  },
  {
    id: 5,
    name: "Customer Support Package",
    category: "Service",
    unitsSold: 142,
    revenue: 14200,
    change: { value: "+5%", type: "positive" }
  }
];

const categoryColors: Record<string, string> = {
  Software: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Service: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Training: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

export function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Units Sold</TableHead>
          <TableHead className="text-right">Revenue</TableHead>
          <TableHead className="text-right">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsData.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>
              <Badge className={`${categoryColors[product.category]} border-0`} variant="outline">
                {product.category}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{product.unitsSold.toLocaleString()}</TableCell>
            <TableCell className="text-right">${product.revenue.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                {product.change.type === "positive" ? (
                  <ArrowUp className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500" />
                )}
                <span className={product.change.type === "positive" ? "text-green-500" : "text-red-500"}>
                  {product.change.value}
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
