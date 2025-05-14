import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Star } from "lucide-react"
import Link from "next/link"

export default function RateBuyerPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/transaction" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">Rate Buyer</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Transaction Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Buyer</p>
                  <p className="font-medium">Agro Traders</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <p className="font-medium">#TRX12345</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Crop</p>
                  <p className="font-medium">Wheat (500 kg)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">₹12,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">May 15, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Rate Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        rating <= 4 ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <Star
                        className={`h-8 w-8 ${rating <= 4 ? "text-yellow-500" : "text-gray-300"}`}
                        fill={rating <= 4 ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Payment Timeliness</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        rating <= 5 ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <Star
                        className={`h-5 w-5 ${rating <= 5 ? "text-yellow-500" : "text-gray-300"}`}
                        fill={rating <= 5 ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Communication</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        rating <= 4 ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <Star
                        className={`h-5 w-5 ${rating <= 4 ? "text-yellow-500" : "text-gray-300"}`}
                        fill={rating <= 4 ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Pickup/Logistics</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        rating <= 3 ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      <Star
                        className={`h-5 w-5 ${rating <= 3 ? "text-yellow-500" : "text-gray-300"}`}
                        fill={rating <= 3 ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Your Comments</p>
                <Textarea
                  placeholder="Share your experience with this buyer..."
                  className="min-h-[100px]"
                  defaultValue="Good buyer overall. Payment was on time and communication was clear. The pickup was slightly delayed by a few hours, but they informed me in advance."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            Skip
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Submit Rating</Button>
        </div>
      </main>
    </div>
  )
}
