import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, ChevronLeft, FileText, Filter, Home, LayoutDashboard, LineChart, Package, Plus, Search, Settings, ShoppingCart, Star, Truck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function MarketPage() {
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
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <ShoppingCart className="h-5 w-5 text-emerald-500" />
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
            <Link href="/market" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4">Market</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-9 w-64" placeholder="Search listings..." />
            </div>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="border rounded p-1 text-sm">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-1" /> Create Listing
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
              Market Listings
              <span className="text-gray-400 text-sm font-normal">• 12</span>
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
            {/* Market Listing 1 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-blue-100 h-12 w-12 rounded flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      500 kg available
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Premium Wheat</h3>
                    <div className="text-emerald-600 font-bold text-lg mb-4">₹22.00/kg</div>
                    <p className="text-gray-600 mb-6">
                      High-quality wheat grain available for bulk purchase. Grade A certified.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">SELLER</div>
                        <div className="text-gray-900">Mahesh Farming Co.</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">LOCATION</div>
                        <div className="text-gray-900">Haryana (120km)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Listing 2 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-red-100 h-12 w-12 rounded flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      100 kg available
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fresh Tomatoes</h3>
                    <div className="text-emerald-600 font-bold text-lg mb-4">₹20.00/kg</div>
                    <p className="text-gray-600 mb-6">
                      Farm-fresh tomatoes perfect for restaurants and retail. Grade B quality.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">SELLER</div>
                        <div className="text-gray-900">Green Valley Farms</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">LOCATION</div>
                        <div className="text-gray-900">Uttar Pradesh (80km)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Listing 3 */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Active
                  </div>
                  <div className="p-6">
                    <div className="mb-4 bg-yellow-100 h-12 w-12 rounded flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      300 kg available
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quality Potatoes</h3>
                    <div className="text-emerald-600 font-bold text-lg mb-4">₹18.00/kg</div>
                    <p className="text-gray-600 mb-6">
                      Premium potatoes, perfect size for commercial use. Grade A quality.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <div className="text-xs uppercase text-gray-500 mb-1">SELLER</div>
                        <div className="text-gray-900">Punjab Agro Products</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase text-gray-500 mb-1">LOCATION</div>
                        <div className="text-gray-900">Punjab (150km)</div>
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

interface MarketListingProps {
  crop: string
  quantity: string
  grade: string
  minPrice: string
  bids: number
  highestBid: string
  daysListed: number
  status: "Active" | "Pending" | "Sold"
}

function MarketListing({ crop, quantity, grade, minPrice, bids, highestBid, daysListed, status }: MarketListingProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{crop}</h3>
          <Badge variant={status === "Active" ? "default" : status === "Pending" ? "outline" : "secondary"}>
            {status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-sm text-gray-500">Quantity</p>
            <p className="font-medium">{quantity}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Grade</p>
            <p className="font-medium">{grade}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Min. Price</p>
            <p className="font-medium">₹{minPrice}/kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Highest Bid</p>
            <p className="font-medium text-green-700">₹{highestBid}/kg</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500">
            Listed {daysListed} day{daysListed > 1 ? "s" : ""} ago
          </p>
          <p>
            {bids} bid{bids > 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex gap-2 mt-3">
          <Button variant="outline" className="flex-1 text-sm h-9">
            View Bids
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-sm h-9">Edit Listing</Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface BidCardProps {
  crop: string
  quantity: string
  bidAmount: string
  bidder: string
  bidderRating: number
  bidTime: string
  expiresIn: string
}

function BidCard({ crop, quantity, bidAmount, bidder, bidderRating, bidTime, expiresIn }: BidCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">
            {crop} - {quantity}
          </h3>
          <Badge variant="outline" className="text-green-700 bg-green-50 border-green-200">
            New Bid
          </Badge>
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-500">Bid Amount</p>
          <p className="text-xl font-bold text-green-700">₹{bidAmount}/kg</p>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Bidder</p>
            <p className="font-medium">{bidder}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-medium">{bidderRating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm mb-3">
          <p className="text-gray-500">Bid placed {bidTime}</p>
          <p>Expires in {expiresIn}</p>
        </div>

        <div className="p-3 bg-blue-50 rounded-md border border-blue-100 mb-3">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Market Analysis:</span> This bid is 5% above current market price. Low
            exploitation risk.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 text-sm h-9">
            Reject
          </Button>
          <Button variant="outline" className="flex-1 text-sm h-9">
            Negotiate
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-sm h-9">Accept</Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface MarketPriceCardProps {
  crop: string
  currentPrice: string
  trend: "up" | "down" | "stable"
  trendPercentage: string
  lastUpdated: string
  forecast: "Rising" | "Falling" | "Stable"
}

function MarketPriceCard({ crop, currentPrice, trend, trendPercentage, lastUpdated, forecast }: MarketPriceCardProps) {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→"
  const trendColor = trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"
  const forecastColor =
    forecast === "Rising" ? "text-green-700" : forecast === "Falling" ? "text-red-700" : "text-blue-700"

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{crop}</h3>
          <Badge variant="outline" className={`${forecastColor} bg-opacity-10`}>
            {forecast}
          </Badge>
        </div>

        <div className="flex items-end gap-2 mb-3">
          <p className="text-2xl font-bold">₹{currentPrice}/kg</p>
          <p className={`text-sm font-medium ${trendColor} flex items-center`}>
            {trendIcon} {trendPercentage}%
          </p>
        </div>

        <div className="h-12 w-full bg-gray-100 rounded-md mb-3">
          {/* Placeholder for price chart */}
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-xs text-gray-500">Price trend chart</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500">Last updated {lastUpdated}</p>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
