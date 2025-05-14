import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, ChevronLeft, Filter, Home, MessageCircle, Package, Search, ShoppingCart, Truck } from "lucide-react"
import Link from "next/link"

export default function MyBidsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/buyer/browse" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-blue-800">My Bids</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input className="pl-9" placeholder="Search bids..." />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Bids Tabs */}
        <Tabs defaultValue="active" className="mb-6">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-0">
            <div className="space-y-4">
              <BidCard
                crop="Wheat"
                quantity="500 kg"
                bidAmount="24.00"
                farmer="Rajesh Kumar"
                location="Haryana"
                status="Pending"
                bidTime="2 hours ago"
                expiresIn="22 hours"
              />

              <BidCard
                crop="Potatoes"
                quantity="300 kg"
                bidAmount="19.00"
                farmer="Suresh Singh"
                location="Punjab"
                status="Pending"
                bidTime="1 hour ago"
                expiresIn="23 hours"
              />

              <BidCard
                crop="Rice"
                quantity="450 kg"
                bidAmount="32.50"
                farmer="Amit Patel"
                location="Haryana"
                status="Countered"
                bidAmount2="33.00"
                bidTime="5 hours ago"
                expiresIn="19 hours"
              />
            </div>
          </TabsContent>

          <TabsContent value="accepted" className="mt-0">
            <div className="space-y-4">
              <BidCard
                crop="Onions"
                quantity="200 kg"
                bidAmount="17.50"
                farmer="Ramesh Yadav"
                location="Maharashtra"
                status="Accepted"
                bidTime="1 day ago"
                pickupDate="May 18, 2025"
              />
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="mt-0">
            <div className="space-y-4">
              <BidCard
                crop="Tomatoes"
                quantity="100 kg"
                bidAmount="19.00"
                farmer="Vijay Kumar"
                location="Uttar Pradesh"
                status="Rejected"
                bidTime="2 days ago"
                reason="Price too low"
              />
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <div className="space-y-4">
              <BidCard
                crop="Wheat"
                quantity="300 kg"
                bidAmount="21.50"
                farmer="Mohan Singh"
                location="Punjab"
                status="Completed"
                bidTime="15 days ago"
                completedDate="May 1, 2025"
              />

              <BidCard
                crop="Rice"
                quantity="400 kg"
                bidAmount="31.00"
                farmer="Prakash Sharma"
                location="Haryana"
                status="Completed"
                bidTime="20 days ago"
                completedDate="Apr 25, 2025"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <Tabs defaultValue="bids" className="w-full">
          <TabsList className="w-full grid grid-cols-5 bg-transparent h-16">
            <TabsTrigger
              value="home"
              className="flex flex-col items-center justify-center data-[state=active]:text-blue-700"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </TabsTrigger>
            <TabsTrigger
              value="browse"
              className="flex flex-col items-center justify-center data-[state=active]:text-blue-700"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs mt-1">Browse</span>
            </TabsTrigger>
            <TabsTrigger
              value="bids"
              className="flex flex-col items-center justify-center data-[state=active]:text-blue-700"
            >
              <Package className="h-5 w-5" />
              <span className="text-xs mt-1">My Bids</span>
            </TabsTrigger>
            <TabsTrigger
              value="logistics"
              className="flex flex-col items-center justify-center data-[state=active]:text-blue-700"
            >
              <Truck className="h-5 w-5" />
              <span className="text-xs mt-1">Logistics</span>
            </TabsTrigger>
            <TabsTrigger
              value="insights"
              className="flex flex-col items-center justify-center data-[state=active]:text-blue-700"
            >
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs mt-1">Insights</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </footer>
    </div>
  )
}

interface BidCardProps {
  crop: string
  quantity: string
  bidAmount: string
  bidAmount2?: string
  farmer: string
  location: string
  status: "Pending" | "Countered" | "Accepted" | "Rejected" | "Completed"
  bidTime: string
  expiresIn?: string
  pickupDate?: string
  reason?: string
  completedDate?: string
}

function BidCard({
  crop,
  quantity,
  bidAmount,
  bidAmount2,
  farmer,
  location,
  status,
  bidTime,
  expiresIn,
  pickupDate,
  reason,
  completedDate,
}: BidCardProps) {
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Countered: "bg-blue-100 text-blue-800 border-blue-200",
    Accepted: "bg-green-100 text-green-800 border-green-200",
    Rejected: "bg-red-100 text-red-800 border-red-200",
    Completed: "bg-purple-100 text-purple-800 border-purple-200",
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">
            {crop} - {quantity}
          </h3>
          <Badge variant="outline" className={statusColors[status]}>
            {status}
          </Badge>
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-500">Your Bid</p>
          <div className="flex items-center">
            <p className="text-xl font-bold text-blue-700">₹{bidAmount}/kg</p>
            {bidAmount2 && <Badge className="ml-2 bg-blue-600">Countered: ₹{bidAmount2}/kg</Badge>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div>
            <p className="text-sm text-gray-500">Farmer</p>
            <p className="font-medium">{farmer}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{location}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm mb-3">
          <p className="text-gray-500">Bid placed {bidTime}</p>
          {expiresIn && <p>Expires in {expiresIn}</p>}
          {pickupDate && <p>Pickup on {pickupDate}</p>}
          {reason && <p className="text-red-600">Reason: {reason}</p>}
          {completedDate && <p>Completed on {completedDate}</p>}
        </div>

        <div className="flex gap-2">
          {status === "Pending" && (
            <>
              <Button variant="outline" className="flex-1 text-sm h-9">
                Edit Bid
              </Button>
              <Button variant="outline" className="flex-1 text-sm h-9">
                Cancel
              </Button>
            </>
          )}

          {status === "Countered" && (
            <>
              <Button variant="outline" className="flex-1 text-sm h-9">
                Reject
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm h-9">Accept Counter</Button>
            </>
          )}

          {status === "Accepted" && (
            <>
              <Button variant="outline" className="flex-1 text-sm h-9">
                View Details
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm h-9">
                <Truck className="mr-1 h-4 w-4" /> Arrange Pickup
              </Button>
            </>
          )}

          {(status === "Rejected" || status === "Completed") && (
            <Button variant="outline" className="w-full text-sm h-9">
              View Details
            </Button>
          )}

          {status !== "Rejected" && status !== "Completed" && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MessageCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
