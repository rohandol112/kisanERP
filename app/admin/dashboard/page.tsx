import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  BarChart3,
  Download,
  FileText,
  Flag,
  LineChart,
  PieChart,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
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
                className="flex items-center gap-3 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/price-reports"
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
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
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-500">Overview of market activities and alerts</p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 font-medium">Total Transactions</h3>
                <BarChart3 className="h-5 w-5 text-purple-500" />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">1,248</p>
                <p className="text-sm text-green-600">↑ 12.5%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 font-medium">Transaction Value</h3>
                <LineChart className="h-5 w-5 text-blue-500" />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">₹24.5L</p>
                <p className="text-sm text-green-600">↑ 8.2%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 font-medium">Active Users</h3>
                <Users className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">3,842</p>
                <p className="text-sm text-green-600">↑ 15.3%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 font-medium">Exploitation Alerts</h3>
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-red-600">↑ 5.2%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Transaction Volume by Crop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full bg-gray-100 rounded-md flex items-center justify-center">
                <PieChart className="h-12 w-12 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Price Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full bg-gray-100 rounded-md flex items-center justify-center">
                <LineChart className="h-12 w-12 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Exploitation Alerts */}
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Exploitation Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ExploitationAlert
                crop="Tomatoes"
                marketPrice="24.50"
                bidPrice="18.20"
                exploitationRisk="25.7"
                buyer="Farm Fresh Co."
                farmer="Vijay Kumar"
                time="2 hours ago"
                status="High"
              />

              <ExploitationAlert
                crop="Potatoes"
                marketPrice="18.25"
                bidPrice="15.00"
                exploitationRisk="17.8"
                buyer="Vegetable Mart"
                farmer="Suresh Singh"
                time="5 hours ago"
                status="Medium"
              />

              <ExploitationAlert
                crop="Onions"
                marketPrice="21.00"
                bidPrice="18.50"
                exploitationRisk="11.9"
                buyer="Agro Traders"
                farmer="Ramesh Yadav"
                time="1 day ago"
                status="Low"
              />
            </div>
          </CardContent>
        </Card>

        {/* Flagged Users */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recently Flagged Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <FlaggedUser
                name="Vegetable Mart"
                type="Buyer"
                reason="Consistently bidding below market price"
                flags={5}
                time="3 days ago"
              />

              <FlaggedUser
                name="Quick Traders"
                type="Buyer"
                reason="Payment delays reported by multiple farmers"
                flags={3}
                time="1 week ago"
              />

              <FlaggedUser
                name="Mohan Singh"
                type="Farmer"
                reason="Quality issues reported in multiple transactions"
                flags={2}
                time="2 weeks ago"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface ExploitationAlertProps {
  crop: string
  marketPrice: string
  bidPrice: string
  exploitationRisk: string
  buyer: string
  farmer: string
  time: string
  status: "High" | "Medium" | "Low"
}

function ExploitationAlert({
  crop,
  marketPrice,
  bidPrice,
  exploitationRisk,
  buyer,
  farmer,
  time,
  status,
}: ExploitationAlertProps) {
  const statusColors = {
    High: "bg-red-100 text-red-800 border-red-200",
    Medium: "bg-orange-100 text-orange-800 border-orange-200",
    Low: "bg-yellow-100 text-yellow-800 border-yellow-200",
  }

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          <h3 className="font-medium">
            {crop} - {buyer}
          </h3>
        </div>
        <Badge variant="outline" className={statusColors[status]}>
          {status} Risk
        </Badge>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-2">
        <div>
          <p className="text-sm text-gray-500">Market Price</p>
          <p className="font-medium">₹{marketPrice}/kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Bid Price</p>
          <p className="font-medium">₹{bidPrice}/kg</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Exploitation Risk</p>
          <p className="font-medium text-red-600">{exploitationRisk}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Farmer</p>
          <p className="font-medium">{farmer}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Detected {time}</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Ignore
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Investigate
          </Button>
        </div>
      </div>
    </div>
  )
}

interface FlaggedUserProps {
  name: string
  type: "Buyer" | "Farmer"
  reason: string
  flags: number
  time: string
}

function FlaggedUser({ name, type, reason, flags, time }: FlaggedUserProps) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Flag className="h-5 w-5 text-red-500" />
          <h3 className="font-medium">{name}</h3>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          {type}
        </Badge>
      </div>
      <p className="text-sm mb-2">{reason}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">Flagged {time}</p>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            {flags} flags
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Dismiss
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Review
          </Button>
        </div>
      </div>
    </div>
  )
}
