import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ImageIcon, MessageCircle, Star, Truck } from "lucide-react"
import Link from "next/link"

export default function CropDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/buyer/browse" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-blue-800">Crop Details</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Wheat</h2>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Grade A
              </Badge>
            </div>
            <div className="mb-4">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-2">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium">500 kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Min. Price</p>
                <p className="font-medium">₹22.00/kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Harvest Date</p>
                <p className="font-medium">Apr 15, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Haryana (120 km)</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Description</p>
              <p className="text-sm">
                Premium quality wheat with 12% moisture content. Free from pests and foreign matter. Suitable for flour
                mills and food processing.
              </p>
            </div>

            <div className="p-3 bg-blue-50 rounded-md border border-blue-100 mb-4">
              <p className="text-sm font-medium text-blue-800">Market Analysis</p>
              <p className="text-sm text-blue-700 mt-1">
                Current market price is ₹23.50/kg. This listing is priced 6.4% below market rate.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Farmer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="font-medium text-green-700">RK</span>
              </div>
              <div>
                <p className="font-medium">Rajesh Kumar</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm">4.8 (24 deals)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">Jan 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Response Time</p>
                <p className="font-medium">Usually within 2 hours</p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" /> Chat with Farmer
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Place Your Bid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Your Bid (₹/kg)</p>
                  <Input type="number" defaultValue="24.00" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Quantity (kg)</p>
                  <Input type="number" defaultValue="500" />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Total Bid Value</p>
                <p className="text-xl font-bold text-blue-700">₹12,000</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Pickup/Delivery</p>
                <Tabs defaultValue="pickup">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="pickup">I'll arrange pickup</TabsTrigger>
                    <TabsTrigger value="delivery">Request delivery</TabsTrigger>
                  </TabsList>
                  <TabsContent value="pickup" className="mt-2">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <p className="text-sm">You'll arrange transportation from the farmer's location</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="delivery" className="mt-2">
                    <div className="space-y-2">
                      <p className="text-sm">Delivery to your location (additional charges may apply)</p>
                      <Input placeholder="Enter delivery address" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                <Tabs defaultValue="bank">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                    <TabsTrigger value="upi">UPI</TabsTrigger>
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Additional Notes</p>
                <Input placeholder="Any specific requirements or questions..." />
              </div>

              <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="text-sm font-medium text-blue-800">Bid Analysis</p>
                <p className="text-sm text-blue-700 mt-1">
                  Your bid is 9.1% above the farmer's minimum price and 2.1% above current market price.
                </p>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">Place Bid</Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-6">
          <Button variant="outline" className="flex-1">
            Request Sample
          </Button>
          <Button variant="outline" className="flex-1">
            Save for Later
          </Button>
        </div>
      </main>
    </div>
  )
}
