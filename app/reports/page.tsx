import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, Download, Eye, FileText, Filter, LayoutDashboard, LineChart, Package, Printer, Search, Settings, ShoppingCart, Truck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function ReportsPage() {
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
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <LineChart className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/reports" 
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <FileText className="h-5 w-5 text-emerald-500" />
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
            <Link href="/reports" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4">Reports</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-9 w-64" placeholder="Search reports..." />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <FileText className="h-4 w-4 mr-2" /> Generate Report
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
            <h1 className="text-2xl font-bold mb-2">Reports</h1>
            <p className="text-gray-500">Access and generate reports for your agricultural business</p>
          </div>

          {/* Report Tabs */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="profit">Profit/Loss</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {/* Filter Bar */}
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Filter by:</span>
                  </div>
                  <select className="border rounded p-1 text-sm">
                    <option>All Types</option>
                    <option>Sales Reports</option>
                    <option>Inventory Reports</option>
                    <option>Financial Reports</option>
                  </select>
                  <select className="border rounded p-1 text-sm">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>This year</option>
                    <option>Custom range</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" /> Date Range
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-1" /> More Filters
                  </Button>
                </div>
              </div>

              {/* Reports List */}
              <div className="space-y-4">
                {/* Report 1 */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="bg-emerald-100 p-3 rounded-lg">
                          <BarChart3 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Monthly Sales Report</h3>
                          <p className="text-sm text-gray-500">Sales summary for April 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Sales</span>
                        <span className="text-xs text-gray-500">Generated: 02 May 2025</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Total Sales:</span>
                          <span className="font-medium ml-1">₹156,432</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Products Sold:</span>
                          <span className="font-medium ml-1">245 units</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Growth:</span>
                          <span className="text-emerald-600 font-medium ml-1">+12% vs prev. month</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4 mr-1" /> Print
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Report 2 */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Package className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Inventory Status Report</h3>
                          <p className="text-sm text-gray-500">Current inventory levels and valuations</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Inventory</span>
                        <span className="text-xs text-gray-500">Generated: 01 May 2025</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Total Items:</span>
                          <span className="font-medium ml-1">1,250 kg</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Inventory Value:</span>
                          <span className="font-medium ml-1">₹89,750</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Low Stock Alert:</span>
                          <span className="text-red-600 font-medium ml-1">3 items</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4 mr-1" /> Print
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Report 3 */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Profit & Loss Statement</h3>
                          <p className="text-sm text-gray-500">Financial performance for Q1 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Financial</span>
                        <span className="text-xs text-gray-500">Generated: 15 Apr 2025</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Revenue:</span>
                          <span className="font-medium ml-1">₹324,750</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Expenses:</span>
                          <span className="font-medium ml-1">₹231,320</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Net Profit:</span>
                          <span className="text-emerald-600 font-medium ml-1">₹93,430</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4 mr-1" /> Print
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Report 4 */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-100 p-3 rounded-lg">
                          <LineChart className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Market Price Analysis</h3>
                          <p className="text-sm text-gray-500">Price trends and forecasts</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Market</span>
                        <span className="text-xs text-gray-500">Generated: 28 Apr 2025</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Crops Analyzed:</span>
                          <span className="font-medium ml-1">5 types</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Avg. Price Trend:</span>
                          <span className="text-emerald-600 font-medium ml-1">+4.2% monthly</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Price Forecast:</span>
                          <span className="font-medium ml-1">Positive (next 30 days)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4 mr-1" /> Print
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">
                  Showing 4 of 12 reports
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-emerald-50">1</Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-0">
              <div className="bg-white rounded-lg border p-6 text-center h-64 flex items-center justify-center">
                <div>
                  <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Sales Reports</h3>
                  <p className="text-gray-500 mb-4">View detailed sales reports and transaction analytics</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">View Sales Reports</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-0">
              <div className="bg-white rounded-lg border p-6 text-center h-64 flex items-center justify-center">
                <div>
                  <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Inventory Reports</h3>
                  <p className="text-gray-500 mb-4">Track inventory levels, movement, and valuation</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">View Inventory Reports</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profit" className="mt-0">
              <div className="bg-white rounded-lg border p-6 text-center h-64 flex items-center justify-center">
                <div>
                  <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Profit & Loss Reports</h3>
                  <p className="text-gray-500 mb-4">Analyze financial performance and profitability</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">View P&L Reports</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="bg-white rounded-lg border p-6 text-center h-64 flex items-center justify-center">
                <div>
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Custom Reports</h3>
                  <p className="text-gray-500 mb-4">Create and save custom reports for your specific needs</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Create Custom Report</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Recently Generated Reports */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recently Generated Reports</h2>
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <h3 className="font-medium">Quick Access</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-3 justify-start">
                    <FileText className="h-5 w-5 mr-2 text-emerald-600" />
                    <div className="text-left">
                      <div className="font-medium">Weekly Sales</div>
                      <div className="text-xs text-gray-500">Generated 2 days ago</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 justify-start">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    <div className="text-left">
                      <div className="font-medium">Inventory Status</div>
                      <div className="text-xs text-gray-500">Generated yesterday</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 justify-start">
                    <FileText className="h-5 w-5 mr-2 text-amber-600" />
                    <div className="text-left">
                      <div className="font-medium">Price Comparison</div>
                      <div className="text-xs text-gray-500">Generated 3 days ago</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 justify-start">
                    <FileText className="h-5 w-5 mr-2 text-purple-600" />
                    <div className="text-left">
                      <div className="font-medium">Monthly P&L</div>
                      <div className="text-xs text-gray-500">Generated last week</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 