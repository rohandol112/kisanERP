import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BarChart3, FileText, Filter, LayoutDashboard, LineChart, Package, Plus, Search, Settings, ShoppingCart, Truck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function InventoryPage() {
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
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <Package className="h-5 w-5 text-emerald-500" />
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
            <Link href="/inventory" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4">Inventory</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-9 w-64" placeholder="Search inventory..." />
            </div>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="border rounded p-1 text-sm">
                <option>Date Added</option>
                <option>Name</option>
                <option>Status</option>
              </select>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-1" /> Add Item
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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Inventory Items
              <span className="text-gray-400 text-sm font-normal">• 5</span>
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="21" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="3" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inventory Card 1 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Ready to sell
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-amber-100 h-12 w-12 rounded flex items-center justify-center">
                      <Package className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      500 kg • Grade A
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Wheat</h3>
                    <p className="text-gray-600 mb-6">
                      High-quality wheat grain ready for market. Harvested from the northern fields.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">HARVESTED</div>
                        <div className="text-gray-900">15 Apr 2025</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">EXPIRES IN</div>
                        <div className="text-gray-900">90 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Card 2 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    Expiring soon
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-red-100 h-12 w-12 rounded flex items-center justify-center">
                      <Package className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      100 kg • Grade B
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Tomatoes</h3>
                    <p className="text-gray-600 mb-6">
                      Fresh tomatoes from greenhouse cultivation. Best used for immediate sales.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">HARVESTED</div>
                        <div className="text-gray-900">10 May 2025</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">EXPIRES IN</div>
                        <div className="text-orange-600 font-medium">3 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Card 3 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Ready to sell
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-purple-100 h-12 w-12 rounded flex items-center justify-center">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      300 kg • Grade A
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Potatoes</h3>
                    <p className="text-gray-600 mb-6">
                      Premium potatoes from the eastern fields. Excellent quality for market sales.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">HARVESTED</div>
                        <div className="text-gray-900">5 May 2025</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">EXPIRES IN</div>
                        <div className="text-gray-900">30 days</div>
                      </div>
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
