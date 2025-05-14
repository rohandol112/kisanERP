import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, ChevronDown, FileText, Filter, LayoutDashboard, LineChart, Package, Search, Settings, ShoppingCart, Truck, TrendingDown, TrendingUp, UserCircle } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
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
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Insights</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/analytics" 
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <LineChart className="h-5 w-5 text-emerald-500" />
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
            <Link href="/analytics" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4">Analytics</Link>
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
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                <span className="text-xs">RR</span>
              </div>
              <span className="font-medium">Rajesh Rajput</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Advanced Analytics</h1>
            <p className="text-gray-500">Gain deep insights into your agricultural business performance and market trends</p>
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                    <h3 className="text-2xl font-bold">₹287,493</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      8.2% from last month
                    </span>
                  </div>
                  <div className="bg-emerald-100 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Avg. Transaction Value</p>
                    <h3 className="text-2xl font-bold">₹12,845</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      4.5% from last month
                    </span>
                  </div>
                  <div className="bg-blue-100 p-2 rounded">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Profit Margin</p>
                    <h3 className="text-2xl font-bold">24.8%</h3>
                    <span className="text-xs text-red-600 flex items-center mt-1">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      2.1% from last month
                    </span>
                  </div>
                  <div className="bg-purple-100 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Crop Price Trend</p>
                    <h3 className="text-2xl font-bold">Upward</h3>
                    <span className="text-xs text-emerald-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Expected to continue
                    </span>
                  </div>
                  <div className="bg-amber-100 p-2 rounded">
                    <LineChart className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main Charts Section */}
            <div className="col-span-8">
              <Card className="mb-6">
                <CardHeader className="pb-0">
                  <CardTitle>Revenue and Profit Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Tabs defaultValue="revenue">
                    <TabsList className="mb-4">
                      <TabsTrigger value="revenue">Revenue</TabsTrigger>
                      <TabsTrigger value="profit">Profit</TabsTrigger>
                      <TabsTrigger value="comparison">Comparison</TabsTrigger>
                    </TabsList>
                    <TabsContent value="revenue">
                      <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <LineChart className="h-10 w-10 mx-auto mb-2" />
                          <p>Revenue chart would appear here</p>
                          <p className="text-sm">Showing monthly revenue across different crops</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="profit">
                      <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <BarChart3 className="h-10 w-10 mx-auto mb-2" />
                          <p>Profit chart would appear here</p>
                          <p className="text-sm">Showing monthly profit margins by crop type</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="comparison">
                      <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <LineChart className="h-10 w-10 mx-auto mb-2" />
                          <p>Comparison chart would appear here</p>
                          <p className="text-sm">Showing revenue vs. profit over time</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Market Price Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8">All Crops</Button>
                      <Button variant="outline" size="sm" className="h-8">Wheat</Button>
                      <Button variant="outline" size="sm" className="h-8">Rice</Button>
                      <Button variant="outline" size="sm" className="h-8">Vegetables</Button>
                    </div>
                    <select className="border rounded text-sm p-1">
                      <option>Last 3 months</option>
                      <option>Last 6 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                  <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <LineChart className="h-10 w-10 mx-auto mb-2" />
                      <p>Market price trends would appear here</p>
                      <p className="text-sm">Showing price fluctuations for selected crops</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Charts and Analysis */}
            <div className="col-span-4">
              <Card className="mb-6">
                <CardHeader className="pb-0">
                  <CardTitle>Crop Performance</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                      <p>Crop distribution chart</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm">Wheat</span>
                      </div>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Rice</span>
                      </div>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Tomatoes</span>
                      </div>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Other</span>
                      </div>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader className="pb-0">
                  <CardTitle>Sales by Region</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p>Regional sales map</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Punjab</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded bg-gray-200 overflow-hidden">
                          <div className="h-full bg-emerald-500 w-3/4"></div>
                        </div>
                        <span className="text-sm font-medium">₹87,245</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Haryana</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded bg-gray-200 overflow-hidden">
                          <div className="h-full bg-emerald-500 w-2/3"></div>
                        </div>
                        <span className="text-sm font-medium">₹65,182</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Uttar Pradesh</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded bg-gray-200 overflow-hidden">
                          <div className="h-full bg-emerald-500 w-1/2"></div>
                        </div>
                        <span className="text-sm font-medium">₹52,931</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rajasthan</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded bg-gray-200 overflow-hidden">
                          <div className="h-full bg-emerald-500 w-1/3"></div>
                        </div>
                        <span className="text-sm font-medium">₹38,475</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>AI Market Predictions</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <h4 className="font-medium text-emerald-700">Wheat Price Increase</h4>
                      </div>
                      <p className="text-sm text-gray-600">Expected 7-9% price increase for wheat in the next 30 days based on market patterns.</p>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="font-medium text-yellow-700">Supply Chain Alert</h4>
                      </div>
                      <p className="text-sm text-gray-600">Potential transportation issues in Northern regions. Consider adjusting delivery schedules.</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                      <div className="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="font-medium text-blue-700">Market Opportunity</h4>
                      </div>
                      <p className="text-sm text-gray-600">Increasing demand for organic vegetables in urban markets. Consider adjusting production.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 