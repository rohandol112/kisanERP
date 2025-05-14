import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Download, QrCode, Share2 } from "lucide-react"
import Link from "next/link"

export default function QrGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/inventory" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-green-800">QR Code Generator</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20 max-w-3xl">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <QrCode className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-800 mb-1">Generate QR Codes for Inventory</h2>
              <p className="text-sm text-green-700">
                Create QR codes for your crops to track inventory and share crop information with buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>QR Code Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crop-type">Crop Type</Label>
                <Select defaultValue="wheat">
                  <SelectTrigger id="crop-type">
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="potato">Potato</SelectItem>
                    <SelectItem value="tomato">Tomato</SelectItem>
                    <SelectItem value="onion">Onion</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="batch-id">Batch ID</Label>
                <Input id="batch-id" defaultValue="WHT-2025-001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" defaultValue="500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="harvest-date">Harvest Date</Label>
                <Input id="harvest-date" type="date" defaultValue="2025-04-15" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Select defaultValue="a">
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Grade A</SelectItem>
                    <SelectItem value="b">Grade B</SelectItem>
                    <SelectItem value="c">Grade C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-info">Additional Information</Label>
                <Input id="additional-info" placeholder="Enter any additional information" />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generated QR Code</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center p-6">
              <div className="h-64 w-64 border-2 border-gray-200 rounded-md flex items-center justify-center mb-4">
                <div className="h-48 w-48 bg-gray-100 rounded flex items-center justify-center">
                  <QrCode className="h-20 w-20 text-gray-400" />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-sm font-medium">Wheat - WHT-2025-001</p>
                <p className="text-xs text-gray-500">500 kg - Grade A</p>
                <p className="text-xs text-gray-500">Harvested: April 15, 2025</p>
              </div>
              
              <div className="flex gap-3 w-full">
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="font-medium">Previously Generated QR Codes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="h-16 w-16 border border-gray-200 rounded-md flex items-center justify-center">
                    <QrCode className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Wheat - WHT-2025-001</p>
                    <p className="text-xs text-gray-500">500 kg - Grade A</p>
                    <p className="text-xs text-gray-500">Generated: May 10, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="h-16 w-16 border border-gray-200 rounded-md flex items-center justify-center">
                    <QrCode className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Rice - RCE-2025-001</p>
                    <p className="text-xs text-gray-500">300 kg - Grade B</p>
                    <p className="text-xs text-gray-500">Generated: Apr 20, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="h-16 w-16 border border-gray-200 rounded-md flex items-center justify-center">
                    <QrCode className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Potato - POT-2025-001</p>
                    <p className="text-xs text-gray-500">200 kg - Grade A</p>
                    <p className="text-xs text-gray-500">Generated: Mar 15, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 