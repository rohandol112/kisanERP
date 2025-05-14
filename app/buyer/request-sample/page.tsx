import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, PackageCheck, PackageOpen, Truck } from "lucide-react"
import Link from "next/link"

export default function RequestSamplePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/buyer/crop-details" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-blue-800">Request Sample</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <PackageOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-blue-800 mb-1">Request a Sample</h2>
              <p className="text-sm text-blue-700">
                Verify quality before purchasing. A small sample can be sent to you for testing before placing a larger order.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Crop Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Crop</p>
                <p className="font-medium">Wheat</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Farmer</p>
                <p className="font-medium">Rajesh Kumar</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Quality Grade</p>
                <p className="font-medium">Grade A</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Haryana (120 km)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Sample Request Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sample-size">Sample Size Required</Label>
              <Select defaultValue="500g">
                <SelectTrigger id="sample-size">
                  <SelectValue placeholder="Select sample size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100g">100g</SelectItem>
                  <SelectItem value="250g">250g</SelectItem>
                  <SelectItem value="500g">500g</SelectItem>
                  <SelectItem value="1kg">1kg</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">Standard sample size is 500g</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery-address">Delivery Address</Label>
              <Textarea 
                id="delivery-address" 
                placeholder="Enter your complete address where the sample should be delivered"
                className="resize-none"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pin-code">PIN Code</Label>
              <Input id="pin-code" placeholder="Enter PIN code" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of Testing</Label>
              <Select defaultValue="quality">
                <SelectTrigger id="purpose">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quality">Quality Verification</SelectItem>
                  <SelectItem value="processing">Processing Test</SelectItem>
                  <SelectItem value="lab">Laboratory Analysis</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Any specific requirements or details about your sample request"
                className="resize-none"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Shipping & Handling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Sample Delivery</p>
                  <p className="text-xs text-gray-500">
                    Standard shipping with tracking - Estimated delivery: 2-3 business days
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-md">
              <div className="flex items-start gap-3">
                <PackageCheck className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Sample Fee</p>
                  <p className="text-xs text-gray-500 mb-2">
                    A nominal fee of ₹200 will be charged for sample delivery, which will be adjusted in your final order if you proceed with the purchase.
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    This fee covers packaging, handling, and delivery of the sample.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3 mb-6">
          <Button variant="outline" className="flex-1">Cancel</Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Submit Request</Button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Your sample request will be sent to the farmer for approval.</p>
          <p>You'll be notified once the farmer accepts your request.</p>
        </div>
      </main>
    </div>
  )
} 