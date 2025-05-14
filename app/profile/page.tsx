import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Edit, MapPin, Phone, Star, User } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">My Profile</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarFallback className="bg-green-100 text-green-800 text-2xl">RK</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">Rajesh Kumar</h2>
                  <Badge className="self-center md:self-auto bg-green-100 text-green-800 hover:bg-green-100">Verified Farmer</Badge>
                </div>
                <div className="flex flex-col md:flex-row gap-4 text-gray-500 mb-4">
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Haryana, India</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-5 w-5 text-yellow-400" 
                        fill={star <= 4 ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium ml-2">4.8 (26 ratings)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Growing wheat, rice, and vegetables with sustainable practices for over 15 years. Certified organic producer.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="transactions" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="ratings">Ratings & Reviews</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
            {/* Transaction List */}
            <div className="space-y-4">
              {/* Transaction Item */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completed
                        </Badge>
                        <span className="text-sm text-gray-500">May 15, 2025</span>
                      </div>
                      <p className="font-medium">Wheat - 500kg @ ₹24/kg</p>
                      <p className="text-sm text-gray-500">Buyer: Agro Traders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹12,000</p>
                      <Link href="/transaction">
                        <Button variant="link" className="h-6 p-0 text-green-700">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction Item */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completed
                        </Badge>
                        <span className="text-sm text-gray-500">April 20, 2025</span>
                      </div>
                      <p className="font-medium">Rice - 300kg @ ₹35/kg</p>
                      <p className="text-sm text-gray-500">Buyer: FoodWorks Inc.</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹10,500</p>
                      <Button variant="link" className="h-6 p-0 text-green-700">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction Item */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Pending
                        </Badge>
                        <span className="text-sm text-gray-500">May 25, 2025</span>
                      </div>
                      <p className="font-medium">Potatoes - 200kg @ ₹18/kg</p>
                      <p className="text-sm text-gray-500">Buyer: Fresh Markets</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹3,600</p>
                      <Button variant="link" className="h-6 p-0 text-green-700">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 text-center">
              <Button variant="outline">View All Transactions</Button>
            </div>
          </TabsContent>
          
          {/* Ratings Tab */}
          <TabsContent value="ratings">
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="flex-1 mb-6 md:mb-0">
                <CardHeader>
                  <CardTitle>Your Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-green-700 mb-2">4.8</div>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-6 w-6 text-yellow-400" 
                          fill={star <= 4 ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Based on 26 ratings</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">5★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">18</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">4★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '20%' }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">5</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">3★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '10%' }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">2</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">2★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '5%' }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">1</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">1★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full" style={{ width: '0%' }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">0</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-lg">Recent Reviews</h3>
                
                {/* Review Item */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-blue-100 text-blue-800">AT</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">Agro Traders</div>
                          <div className="text-sm text-gray-500">2 days ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className="h-4 w-4 text-yellow-400" 
                              fill={star <= 5 ? "currentColor" : "none"} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          Great quality wheat, exactly as described. Delivery was smooth and on time. Will definitely purchase again.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Review Item */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-purple-100 text-purple-800">FW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">FoodWorks Inc.</div>
                          <div className="text-sm text-gray-500">1 month ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className="h-4 w-4 text-yellow-400" 
                              fill={star <= 4 ? "currentColor" : "none"} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          The rice quality was good. There was a slight delay in pickup coordination but overall a good experience.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Stats Tab */}
          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                      <p className="text-2xl font-bold text-green-700">₹1,25,500</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Transactions</p>
                      <p className="text-2xl font-bold text-blue-700">12</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Avg. Price</p>
                      <p className="text-2xl font-bold text-purple-700">₹25.40</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Top Crop</p>
                      <p className="text-2xl font-bold text-yellow-700">Wheat</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-2">Market Performance</p>
                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-600 flex items-center justify-center text-xs text-white"
                        style={{ width: '85%' }}
                      >
                        85% of market average
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Your sales are performing above average for your region
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-60 p-4 bg-gray-50 rounded-md flex items-center justify-center">
                    <p className="text-gray-400">Chart visualization would appear here</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Top Buyers</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-700">AT</span>
                          </div>
                          <span>Agro Traders</span>
                        </div>
                        <span className="font-medium">₹42,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-purple-700">FW</span>
                          </div>
                          <span>FoodWorks Inc.</span>
                        </div>
                        <span className="font-medium">₹38,500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-green-700">FM</span>
                          </div>
                          <span>Fresh Markets</span>
                        </div>
                        <span className="font-medium">₹23,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
} 