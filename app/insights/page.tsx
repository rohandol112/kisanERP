import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BarChart3, Calendar, ChevronDown, FileText, Filter, LayoutDashboard, LineChart, Package, Plus, Search, Settings, ShoppingCart, Truck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed h-full">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500 text-white font-bold">
              KE
            </div>
            <div>
              <h1 className="font-bold">KisanERP</h1>
              <p className="text-xs text-gray-400">kisanerp-farmer.com</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/inventory" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <Package className="h-5 w-5" />
                <span>Inventory</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/market" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Market</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/logistics" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <Truck className="h-5 w-5" />
                <span>Logistics</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/insights" 
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <BarChart3 className="h-5 w-5 text-emerald-500" />
                <span>Insights</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/analytics" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <LineChart className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/reports" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <FileText className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-800">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/settings" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/profile" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-semibold text-lg mr-6">Home</Link>
            <Link href="/insights" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4">Insights</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md px-3 py-1.5 gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Last 30 days</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <Button variant="outline" className="border-gray-200">
              Export
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Generate Report
            </Button>
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                <span className="text-xs">RR</span>
              </div>
              <span className="font-medium">RR</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Market Insights & Analytics</h1>
            <p className="text-gray-500">Monitor market trends, analyze prices, and make data-driven decisions</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                    <h3 className="text-2xl font-bold">₹23.45/kg</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      5.2% from last month
                    </span>
                  </div>
                  <div className="bg-emerald-100 p-2 rounded">
                    <LineChart className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                    <h3 className="text-2xl font-bold">₹245,600</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12.3% from last month
                    </span>
                  </div>
                  <div className="bg-blue-100 p-2 rounded">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Active Listings</p>
                    <h3 className="text-2xl font-bold">12</h3>
                    <span className="text-xs text-red-600 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      2.1% from last month
                    </span>
                  </div>
                  <div className="bg-purple-100 p-2 rounded">
                    <ShoppingCart className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Predicted Risk</p>
                    <h3 className="text-2xl font-bold">Low</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      Market conditions favorable
                    </span>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Market Price Trends */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Market Price Trends</h3>
                  <select className="border rounded p-1 text-sm">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last year</option>
                  </select>
                </div>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-10 w-10 mx-auto mb-2 text-gray-300" />
                    <p>Chart visualization would appear here</p>
                    <p className="text-sm">Showing price trends for wheat, rice, and vegetables</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Forecasts */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Price Forecasts</h3>
                  <select className="border rounded p-1 text-sm">
                    <option>Next 30 days</option>
                    <option>Next 90 days</option>
                    <option>Next 6 months</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 h-10 w-10 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Wheat</h4>
                        <p className="text-sm text-gray-500">Current: ₹22.00/kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-600 font-medium">+7.3%</div>
                      <p className="text-sm text-gray-500">Forecasted increase</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 h-10 w-10 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Tomatoes</h4>
                        <p className="text-sm text-gray-500">Current: ₹20.00/kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-600 font-medium">-4.2%</div>
                      <p className="text-sm text-gray-500">Forecasted decrease</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-100 h-10 w-10 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Potatoes</h4>
                        <p className="text-sm text-gray-500">Current: ₹18.00/kg</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-600 font-medium">+2.1%</div>
                      <p className="text-sm text-gray-500">Forecasted increase</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
