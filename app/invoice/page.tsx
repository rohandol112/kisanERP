import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, Printer, Share2 } from "lucide-react"
import Link from "next/link"

export default function InvoicePage() {
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
          <h1 className="text-xl font-bold text-green-800">Invoice</h1>
          <div className="flex-1 flex justify-end gap-2">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20 max-w-3xl">
        <div className="bg-white border rounded-lg shadow-sm p-8 mb-6">
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-8 pb-4 border-b">
            <div>
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white mr-2">
                  KE
                </div>
                <h2 className="text-xl font-bold">KisanERP</h2>
              </div>
              <p className="text-sm text-gray-500">Invoice #INV-12345</p>
              <p className="text-sm text-gray-500">May 15, 2025</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Status</p>
              <p className="text-sm text-green-600 font-medium">PAID</p>
            </div>
          </div>

          {/* Billing Info */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Seller</p>
              <p className="font-medium">Rajesh Kumar</p>
              <p className="text-sm text-gray-600">GSTIN: 06ABCDE1234F1Z5</p>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-600">Village Sundarpur, Karnal</p>
              <p className="text-sm text-gray-600">Haryana - 132001</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Buyer</p>
              <p className="font-medium">Agro Traders</p>
              <p className="text-sm text-gray-600">GSTIN: 27FGHIJ5678K2Z1</p>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-600">Plot 45, MIDC Industrial Area</p>
              <p className="text-sm text-gray-600">Pune, Maharashtra - 411057</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Order Details</h3>
            <div className="bg-gray-50 rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-3 px-4">Item</th>
                    <th className="text-center py-3 px-4">Quantity</th>
                    <th className="text-right py-3 px-4">Rate</th>
                    <th className="text-right py-3 px-4">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <p className="font-medium">Premium Wheat</p>
                      <p className="text-xs text-gray-500">Grade A, Moisture 12%</p>
                    </td>
                    <td className="py-3 px-4 text-center">500 kg</td>
                    <td className="py-3 px-4 text-right">₹24.00/kg</td>
                    <td className="py-3 px-4 text-right font-medium">₹12,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between py-2">
                <p className="text-sm">Subtotal</p>
                <p className="font-medium">₹12,000.00</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-sm">GST (5%)</p>
                <p className="font-medium">₹600.00</p>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                <p className="font-medium">Total</p>
                <p className="font-bold">₹12,600.00</p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="border-t pt-6 mb-6">
            <h3 className="font-medium mb-2">Payment Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Payment Method</p>
                <p>Bank Transfer</p>
              </div>
              <div>
                <p className="text-gray-500">Transaction ID</p>
                <p>UTR789456123</p>
              </div>
              <div>
                <p className="text-gray-500">Payment Date</p>
                <p>May 15, 2025</p>
              </div>
              <div>
                <p className="text-gray-500">Payment Status</p>
                <p className="text-green-600 font-medium">PAID</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="border-t pt-6 mb-6">
            <h3 className="font-medium mb-2">Notes & Terms</h3>
            <p className="text-sm text-gray-600 mb-3">
              Thank you for your business. This invoice confirms the successful transaction of goods as detailed above.
            </p>
            <p className="text-sm text-gray-600">
              Terms: Payment within 3 days of delivery. For any queries regarding this invoice, please contact us at support@kisanerp.com
            </p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="h-32 w-32 border border-gray-200 rounded-md flex items-center justify-center">
              <p className="text-xs text-gray-400">QR Code</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 