import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, ChevronLeft, Download, Filter, Home, Package, ShoppingCart, Truck } from "lucide-react"
import Link from "next/link"

export default function MarketDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">Live Market Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select crop" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Crops</SelectItem>
              <SelectItem value="wheat">Wheat</SelectItem>
              <SelectItem value="rice">Rice</SelectItem>
              <SelectItem value="potato">Potato</SelectItem>
              <SelectItem value="tomato">Tomato</SelectItem>
              <SelectItem value="onion">Onion</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Market Overview */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 w-full bg-gray-100 rounded-md mb-4">
              {/* Placeholder for market overview chart */}
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-sm text-gray-500">Market trend chart</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Market Sentiment</p>
                <Badge className="bg-green-600">Bullish</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price Volatility</p>
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  Medium
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Tabs */}
        <Tabs defaultValue="mandi" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="mandi">Mandi Prices</TabsTrigger>
            <TabsTrigger value="wholesale">Wholesale</TabsTrigger>
            <TabsTrigger value="retail">Retail</TabsTrigger>
          </TabsList>

          <TabsContent value="mandi" className="mt-0">
            <div className="space-y-4">
              <MarketPriceCard
                crop="Wheat"
                currentPrice="23.50"
                trend="up"
                trendPercentage="5.2"
                lastUpdated="2 hours ago"
                forecast="Rising"
                location="Azadpur Mandi"
              />

              <MarketPriceCard
                crop="Rice"
                currentPrice="32.75"
                trend="up"
                trendPercentage="2.1"
                lastUpdated="3 hours ago"
                forecast="Stable"
                location="Ghazipur Mandi"
              />

              <MarketPriceCard
                crop="Potatoes"
                currentPrice="18.25"
                trend="up"
                trendPercentage="15.3"
                lastUpdated="1 hour ago"
                forecast="Rising"
                location="Azadpur Mandi"
              />

              <MarketPriceCard
                crop="Tomatoes"
                currentPrice="24.50"
                trend="down"
                trendPercentage="3.8"
                lastUpdated="4 hours ago"
                forecast="Falling"
                location="Okhla Mandi"
              />

              <MarketPriceCard
                crop="Onions"
                currentPrice="21.00"
                trend="stable"
                trendPercentage="0.5"
                lastUpdated="2 hours ago"
                forecast="Stable"
                location="Ghazipur Mandi"
              />
            </div>
          </TabsContent>

          <TabsContent value="wholesale" className="mt-0">
            <div className="space-y-4">
              <MarketPriceCard
                crop="Wheat"
                currentPrice="25.75"
                trend="up"
                trendPercentage="4.8"
                lastUpdated="2 hours ago"
                forecast="Rising"
                location="Delhi Wholesale Market"
              />

              <MarketPriceCard
                crop="Rice"
                currentPrice="35.50"
                trend="up"
                trendPercentage="1.8"
                lastUpdated="3 hours ago"
                forecast="Stable"
                location="Delhi Wholesale Market"
              />

              <MarketPriceCard
                crop="Potatoes"
                currentPrice="20.50"
                trend="up"
                trendPercentage="12.5"
                lastUpdated="1 hour ago"
                forecast="Rising"
                location="Delhi Wholesale Market"
              />
            </div>
          </TabsContent>

          <TabsContent value="retail" className="mt-0">
            <div className="space-y-4">
              <MarketPriceCard
                crop="Wheat"
                currentPrice="32.00"
                trend="up"
                trendPercentage="3.5"
                lastUpdated="2 hours ago"
                forecast="Rising"
                location="Delhi Retail Market"
              />

              <MarketPriceCard
                crop="Rice"
                currentPrice="42.25"
                trend="up"
                trendPercentage="1.5"
                lastUpdated="3 hours ago"
                forecast="Stable"
                location="Delhi Retail Market"
              />

              <MarketPriceCard
                crop="Potatoes"
                currentPrice="28.75"
                trend="up"
                trendPercentage="10.2"
                lastUpdated="1 hour ago"
                forecast="Rising"
                location="Delhi Retail Market"
              />
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Price Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-md border border-green-100">
                <p className="text-sm font-medium text-green-800">Potato Price Opportunity</p>
                <p className="text-sm text-green-700 mt-1">
                  Potato prices are trending upward and expected to rise by 15-20% in the next 2 weeks due to reduced
                  supply.
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="text-sm font-medium text-blue-800">Wheat Market Analysis</p>
                <p className="text-sm text-blue-700 mt-1">
                  Current wheat prices are 5% above MSP. Government procurement is active, creating a price floor.
                </p>
              </div>

              <div className="p-3 bg-orange-50 rounded-md border border-orange-100">
                <p className="text-sm font-medium text-orange-800">Tomato Price Alert</p>
                <p className="text-sm text-orange-700 mt-1">
                  Tomato prices are expected to fall in the coming weeks due to increased supply from southern states.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <Tabs defaultValue="market" className="w-full">
          <TabsList className="w-full grid grid-cols-5 bg-transparent h-16">
            <Link href="/" className="w-full">
              <TabsTrigger value="home" className="flex flex-col items-center justify-center data-[state=active]:text-green-700 w-full h-full">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </TabsTrigger>
            </Link>
            <Link href="/inventory" className="w-full">
              <TabsTrigger value="inventory" className="flex flex-col items-center justify-center data-[state=active]:text-green-700 w-full h-full">
                <Package className="h-5 w-5" />
                <span className="text-xs mt-1">Inventory</span>
              </TabsTrigger>
            </Link>
            <Link href="/market" className="w-full">
              <TabsTrigger value="market" className="flex flex-col items-center justify-center data-[state=active]:text-green-700 w-full h-full">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs mt-1">Market</span>
              </TabsTrigger>
            </Link>
            <Link href="/logistics" className="w-full">
              <TabsTrigger value="logistics" className="flex flex-col items-center justify-center data-[state=active]:text-green-700 w-full h-full">
                <Truck className="h-5 w-5" />
                <span className="text-xs mt-1">Logistics</span>
              </TabsTrigger>
            </Link>
            <Link href="/insights" className="w-full">
              <TabsTrigger value="insights" className="flex flex-col items-center justify-center data-[state=active]:text-green-700 w-full h-full">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs mt-1">Insights</span>
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </footer>
    </div>
  )
}

interface MarketPriceCardProps {
  crop: string
  currentPrice: string
  trend: "up" | "down" | "stable"
  trendPercentage: string
  lastUpdated: string
  forecast: "Rising" | "Falling" | "Stable"
  location: string
}

function MarketPriceCard({
  crop,
  currentPrice,
  trend,
  trendPercentage,
  lastUpdated,
  forecast,
  location,
}: MarketPriceCardProps) {
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

        <div className="flex items-end gap-2 mb-2">
          <p className="text-2xl font-bold">₹{currentPrice}/kg</p>
          <p className={`text-sm font-medium ${trendColor} flex items-center`}>
            {trendIcon} {trendPercentage}%
          </p>
        </div>

        <p className="text-xs text-gray-500 mb-3">{location}</p>

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
