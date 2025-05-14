import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Flag,
  LineChart,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function PriceReportsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <ShieldAlert className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold">KisanERP Admin</h1>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/price-reports"
                className="flex items-center gap-3 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
              >
                <LineChart className="h-5 w-5" />
                <span>Price Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exploitation-alerts"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <AlertTriangle className="h-5 w-5" />
                <span>Exploitation Alerts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/flagged-users"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Flag className="h-5 w-5" />
                <span>Flagged Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Users className="h-5 w-5" />
                <span>User Management</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/reports"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FileText className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
            <div>
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@kisanerp.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Bid vs Market Price Reports</h1>
            <p className="text-gray-500">Analysis of transaction prices compared to market rates</p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export Report
            </Button>
          </div>
        </div>

        {/* Price Gap Overview */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Price Gap Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full bg-gray-100 rounded-md mb-6 flex items-center justify-center">
              <LineChart className="h-12 w-12 text-gray-400" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Average Price Gap</p>
                <p className="text-2xl font-bold">12.4%</p>
                <p className="text-xs text-red-600">↑ 2.1% from last month</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Highest Gap Crop</p>
                <p className="text-2xl font-bold">Tomatoes</p>
                <p className="text-xs text-red-600">25.7% below market</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Transactions Analyzed</p>
                <p className="text-2xl font-bold">1,248</p>
                <p className="text-xs text-green-600">↑ 15.3% from last month</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">High Risk Transactions</p>
                <p className="text-2xl font-bold">86</p>
                <p className="text-xs text-red-600">6.9% of total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Gap by Crop */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Price Gap by Crop</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <PriceGapItem
                crop="Tomatoes"
                marketPrice="24.50"
                avgBidPrice="18.20"
                priceGap="25.7"
                transactions={42}
                trend="up"
              />

              <PriceGapItem
                crop="Potatoes"
                marketPrice="18.25"
                avgBidPrice="15.00"
                priceGap="17.8"
                transactions={78}
                trend="down"
              />

              <PriceGapItem
                crop="Onions"
                marketPrice="21.00"
                avgBidPrice="18.50"
                priceGap="11.9"
                transactions={56}
                trend="stable"
              />

              <PriceGapItem
                crop="Wheat"
                marketPrice="23.50"
                avgBidPrice="22.10"
                priceGap="6.0"
                transactions={124}
                trend="down"
              />

              <PriceGapItem
                crop="Rice"
                marketPrice="32.75"
                avgBidPrice="31.20"
                priceGap="4.7"
                transactions={98}
                trend="down"
              />
            </div>
          </CardContent>
        </Card>

        {/* Price Gap by Region */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Price Gap by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full bg-gray-100 rounded-md mb-6 flex items-center justify-center">
              <BarChart3 className="h-12 w-12 text-gray-400" />
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Highest Gap Region</p>
                <p className="text-xl font-bold">Uttar Pradesh</p>
                <p className="text-xs text-red-600">18.5% average gap</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Lowest Gap Region</p>
                <p className="text-xl font-bold">Punjab</p>
                <p className="text-xs text-green-600">5.2% average gap</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Most Improved</p>
                <p className="text-xl font-bold">Haryana</p>
                <p className="text-xs text-green-600">↓ 3.8% from last month</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Worsening Trend</p>
                <p className="text-xl font-bold">Maharashtra</p>
                <p className="text-xs text-red-600">↑ 2.7% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing 1-5 of 12 crops</p>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PriceGapItemProps {
  crop: string
  marketPrice: string
  avgBidPrice: string
  priceGap: string
  transactions: number
  trend: "up" | "down" | "stable"
}

function PriceGapItem({ crop, marketPrice, avgBidPrice, priceGap, transactions, trend }: PriceGapItemProps) {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→"
  const trendColor = trend === "up" ? "text-red-600" : trend === "down" ? "text-green-600" : "text-gray-600"

  const getRiskBadge = (gap: number) => {
    if (gap > 20) return <Badge className="bg-red-600">High Risk</Badge>
    if (gap > 10) return <Badge className="bg-orange-600">Medium Risk</Badge>
    return <Badge className="bg-yellow-600">Low Risk</Badge>
  }

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">{crop}</h3>
          {getRiskBadge(Number.parseFloat(priceGap))}
        </div>
        <p className={`text-sm font-medium ${trendColor} flex items-center`}>
          {trendIcon} {trend === "stable" ? "Stable" : "Trending"}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-500">Market Price</p>
          <p className="font-medium">₹{marketPrice}/kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Avg. Bid Price</p>
          <p className="font-medium">₹{avgBidPrice}/kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Price Gap</p>
          <p className="font-medium text-red-600">{priceGap}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Transactions</p>
          <p className="font-medium">{transactions}</p>
        </div>
      </div>
    </div>
  )
}
