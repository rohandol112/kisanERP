import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Filter, Home, ImageIcon, Package, Search, ShoppingCart, Star, Truck, User } from "lucide-react"
import Link from "next/link"

export default function BuyerBrowsePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-blue-800">KisanERP</h1>
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input className="pl-9" placeholder="Search crops..." />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          <Select>
            <SelectTrigger className="w-[120px] h-9">
              <SelectValue placeholder="Crop Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Crops</SelectItem>
              <SelectItem value="grains">Grains</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[100px] h-9">
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              <SelectItem value="a">Grade A</SelectItem>
              <SelectItem value="b">Grade B</SelectItem>
              <SelectItem value="c">Grade C</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px] h-9">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="north">North India</SelectItem>
              <SelectItem value="south">South India</SelectItem>
              <SelectItem value="east">East India</SelectItem>
              <SelectItem value="west">West India</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px] h-9">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Browse Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="grains">Grains</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-4">
              <CropListingCard
                crop="Wheat"
                quantity="500 kg"
                grade="A"
                price="22.00"
                location="Haryana"
                distance="120 km"
                farmerRating={4.8}
                images={1}
              />

              <CropListingCard
                crop="Potatoes"
                quantity="300 kg"
                grade="A"
                price="18.00"
                location="Punjab"
                distance="150 km"
                farmerRating={4.5}
                images={3}
              />

              <CropListingCard
                crop="Tomatoes"
                quantity="100 kg"
                grade="B"
                price="20.00"
                location="Uttar Pradesh"
                distance="80 km"
                farmerRating={4.2}
                images={2}
              />

              <CropListingCard
                crop="Rice"
                quantity="450 kg"
                grade="A"
                price="30.00"
                location="Haryana"
                distance="110 km"
                farmerRating={4.7}
                images={1}
              />

              <CropListingCard
                crop="Onions"
                quantity="200 kg"
                grade="B"
                price="16.00"
                location="Maharashtra"
                distance="350 km"
                farmerRating={4.4}
                images={2}
              />
            </div>
          </TabsContent>

          <TabsContent value="grains" className="mt-0">
            <div className="space-y-4">
              <CropListingCard
                crop="Wheat"
                quantity="500 kg"
                grade="A"
                price="22.00"
                location="Haryana"
                distance="120 km"
                farmerRating={4.8}
                images={1}
              />

              <CropListingCard
                crop="Rice"
                quantity="450 kg"
                grade="A"
                price="30.00"
                location="Haryana"
                distance="110 km"
                farmerRating={4.7}
                images={1}
              />
            </div>
          </TabsContent>

          <TabsContent value="vegetables" className="mt-0">
            <div className="space-y-4">
              <CropListingCard
                crop="Potatoes"
                quantity="300 kg"
                grade="A"
                price="18.00"
                location="Punjab"
                distance="150 km"
                farmerRating={4.5}
                images={3}
              />

              <CropListingCard
                crop="Tomatoes"
                quantity="100 kg"
                grade="B"
                price="20.00"
                location="Uttar Pradesh"
                distance="80 km"
                farmerRating={4.2}
                images={2}
              />

              <CropListingCard
                crop="Onions"
                quantity="200 kg"
                grade="B"
                price="16.00"
                location="Maharashtra"
                distance="350 km"
                farmerRating={4.4}
                images={2}
              />
            </div>
          </TabsContent>

          <TabsContent value="fruits" className="mt-0">
            <div className="flex flex-col items-center justify-center py-10">
              <Package className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">No fruits available at the moment</p>
              <Button variant="outline" className="mt-4">
                Set Alert for Fruits
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <Tabs defaultValue="browse" className="w-full">
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

interface CropListingCardProps {
  crop: string
  quantity: string
  grade: string
  price: string
  location: string
  distance: string
  farmerRating: number
  images: number
}

function CropListingCard({
  crop,
  quantity,
  grade,
  price,
  location,
  distance,
  farmerRating,
  images,
}: CropListingCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center relative">
            <ImageIcon className="h-8 w-8 text-gray-400" />
            {images > 0 && (
              <Badge className="absolute bottom-1 right-1 h-5 px-1 bg-white text-gray-700 border border-gray-200">
                {images} <span className="sr-only">images</span>
              </Badge>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">{crop}</h3>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {grade}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-2">
              <div>
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium">{quantity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Min. Price</p>
                <p className="font-medium">₹{price}/kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm">
                  {location} ({distance})
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Farmer Rating</p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm">{farmerRating}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 text-sm h-9">
                View Details
              </Button>
              <Link href="/buyer/crop-details" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm h-9">Place Bid</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
