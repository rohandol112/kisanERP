import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Download, FileText, Printer, Share2 } from "lucide-react"
import Link from "next/link"

export default function TransactionPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/bid-details" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">Transaction Confirmation</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-6 text-center">
          <h2 className="text-lg font-bold text-green-800 mb-1">Transaction Confirmed!</h2>
          <p className="text-sm text-green-700">
            Your deal with Agro Traders has been confirmed. Transaction ID: #TRX12345
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Transaction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Crop</p>
                  <p className="font-medium">Wheat</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quantity</p>
                  <p className="font-medium">500 kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">₹24.00/kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Value</p>
                  <p className="font-medium">₹12,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">May 13, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <Badge className="bg-green-600">Confirmed</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Buyer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Buyer</p>
                  <p className="font-medium">Agro Traders</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">GSTIN</p>
                  <p className="font-medium">27AABCT1234Z1ZP</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contact@agrotraders.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Delivery Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium">May 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pickup Location</p>
                  <p className="font-medium">Your Farm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transport</p>
                  <p className="font-medium">Arranged by Buyer</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vehicle Details</p>
                  <p className="font-medium">Pending</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">Bank Transfer</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Pending
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Due</p>
                  <p className="font-medium">May 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Terms</p>
                  <p className="font-medium">100% advance</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="text-sm font-medium text-blue-800">Bank Account Details</p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-blue-700">
                  <p>Account Name:</p>
                  <p className="font-medium">Your Name</p>
                  <p>Account Number:</p>
                  <p className="font-medium">1234567890</p>
                  <p>IFSC Code:</p>
                  <p className="font-medium">SBIN0012345</p>
                  <p>Bank:</p>
                  <p className="font-medium">State Bank of India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 mb-6">
          <Button className="bg-green-600 hover:bg-green-700">
            <FileText className="mr-2 h-4 w-4" /> View Invoice
          </Button>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            You'll receive notifications when the payment is made and when the pickup is completed.
          </p>
          <Link href="/rate-buyer">
            <Button variant="link" className="text-green-700">
              Rate this transaction after completion
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
