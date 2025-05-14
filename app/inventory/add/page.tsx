import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Camera, ChevronLeft, ImageIcon, Mic, Upload } from "lucide-react"
import Link from "next/link"

export default function AddInventoryPage() {
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
          <h1 className="text-xl font-bold text-green-800">Add to Inventory</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Crop Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="crop-type">Crop Type</Label>
              <Select>
                <SelectTrigger id="crop-type">
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="potato">Potato</SelectItem>
                  <SelectItem value="tomato">Tomato</SelectItem>
                  <SelectItem value="onion">Onion</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input id="quantity" type="number" placeholder="Enter quantity" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select>
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Grade A (Premium)</SelectItem>
                  <SelectItem value="b">Grade B (Standard)</SelectItem>
                  <SelectItem value="c">Grade C (Basic)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="harvest-date">Harvest Date</Label>
              <Input id="harvest-date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expected-price">Expected Price (₹/kg)</Label>
              <Input id="expected-price" type="number" placeholder="Enter expected price" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any additional details about the crop" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Add Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center justify-center p-2">
                  <Camera className="h-6 w-6 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500">Add</span>
                </div>
              </div>
              <div className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center justify-center p-2">
                  <ImageIcon className="h-6 w-6 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500">Gallery</span>
                </div>
              </div>
              <div className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center justify-center p-2">
                  <Upload className="h-6 w-6 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500">Upload</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Adding clear photos helps buyers assess quality and can lead to better prices.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Storage Location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="storage-type">Storage Type</Label>
              <Select>
                <SelectTrigger id="storage-type">
                  <SelectValue placeholder="Select storage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farm">On Farm</SelectItem>
                  <SelectItem value="warehouse">Warehouse</SelectItem>
                  <SelectItem value="cold-storage">Cold Storage</SelectItem>
                  <SelectItem value="third-party">Third-Party Logistics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="storage-location">Storage Location Details</Label>
              <Input id="storage-location" placeholder="Enter location details" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Production Cost</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="seed-cost">Seed Cost (₹)</Label>
              <Input id="seed-cost" type="number" placeholder="Enter seed cost" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fertilizer-cost">Fertilizer Cost (₹)</Label>
              <Input id="fertilizer-cost" type="number" placeholder="Enter fertilizer cost" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="labor-cost">Labor Cost (₹)</Label>
              <Input id="labor-cost" type="number" placeholder="Enter labor cost" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="other-cost">Other Costs (₹)</Label>
              <Input id="other-cost" type="number" placeholder="Enter other costs" />
            </div>

            <div className="p-3 bg-green-50 rounded-md border border-green-100">
              <p className="text-sm font-medium text-green-800">Estimated Break-even Price</p>
              <p className="text-lg font-bold text-green-800">₹18.50/kg</p>
              <p className="text-xs text-green-700 mt-1">
                This is the minimum price you should aim to sell at to cover your costs.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 mb-6">
          <Button variant="outline" className="flex-1">
            <Mic className="mr-2 h-4 w-4" /> Voice Entry
          </Button>
          <Button variant="outline" className="flex-1">
            Generate QR Code
          </Button>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Save to Inventory</Button>
        </div>
      </main>
    </div>
  )
}
