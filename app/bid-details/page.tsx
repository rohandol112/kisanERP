import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, MessageCircle, Star, Truck, User } from "lucide-react"
import Link from "next/link"

export default function BidDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/market" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">Bid Details</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Wheat - 500 kg</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Bid Amount</p>
              <p className="text-2xl font-bold text-green-700">₹24.00/kg</p>
              <p className="text-sm text-green-600">Total Value: ₹12,000</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Your Minimum Price</p>
                <p className="font-medium">₹22.00/kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Market Price</p>
                <p className="font-medium">₹23.50/kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Bid Status</p>
                <Badge>Active</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Expires In</p>
                <p className="font-medium">22 hours</p>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-md border border-blue-100 mb-4">
              <p className="text-sm font-medium text-blue-800">Market Analysis</p>
              <p className="text-sm text-blue-700">
                This bid is 2.1% above current market price and 9.1% above your minimum price. Low exploitation risk.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Buyer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Agro Traders</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm">4.8 (32 deals)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Buyer Type</p>
                <p className="font-medium">Wholesaler</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Verified</p>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  GSTIN Verified
                </Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Pune, Maharashtra</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">Mar 2024</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat
              </Button>
              <Button variant="outline" className="flex-1">
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Logistics & Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Pickup/Delivery</p>
                <div className="flex items-center gap-2 mt-1">
                  <Truck className="h-4 w-4 text-green-600" />
                  <p className="font-medium">Buyer will arrange pickup</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Pickup Date</p>
                <p className="font-medium">May 15, 2025 (if accepted)</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">UPI / Bank Transfer</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Payment Terms</p>
                <p className="font-medium">100% advance payment before pickup</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Negotiate Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="Enter your counter offer" defaultValue="25.00" />
                <span className="text-sm font-medium">/kg</span>
              </div>

              <Button variant="outline" className="w-full">
                Send Counter Offer
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            Reject Bid
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Accept Bid</Button>
        </div>
      </main>
    </div>
  )
}
