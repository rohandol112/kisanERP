import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function FarmInfoPage() {
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
          <h1 className="text-xl font-bold text-green-800">Farm Information</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <span className="text-sm font-medium">Basic Info</span>
          </div>
          <div className="h-0.5 flex-1 bg-gray-200 mx-2"></div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
              2
            </div>
            <span className="text-sm text-gray-500">Crops</span>
          </div>
          <div className="h-0.5 flex-1 bg-gray-200 mx-2"></div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
              3
            </div>
            <span className="text-sm text-gray-500">Complete</span>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Basic Farm Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="farm-name">Farm Name</Label>
              <Input id="farm-name" placeholder="Enter your farm name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="farm-location">Farm Location</Label>
              <Input id="farm-location" placeholder="Village, District, State" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="farm-size">Farm Size (in acres)</Label>
              <Input id="farm-size" type="number" placeholder="Enter farm size" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="soil-type">Soil Type</Label>
              <Select>
                <SelectTrigger id="soil-type">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay Soil</SelectItem>
                  <SelectItem value="sandy">Sandy Soil</SelectItem>
                  <SelectItem value="loamy">Loamy Soil</SelectItem>
                  <SelectItem value="silty">Silty Soil</SelectItem>
                  <SelectItem value="peaty">Peaty Soil</SelectItem>
                  <SelectItem value="chalky">Chalky Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="irrigation">Irrigation Source</Label>
              <Select>
                <SelectTrigger id="irrigation">
                  <SelectValue placeholder="Select irrigation source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="canal">Canal</SelectItem>
                  <SelectItem value="well">Well</SelectItem>
                  <SelectItem value="borewell">Borewell</SelectItem>
                  <SelectItem value="rain">Rain-fed</SelectItem>
                  <SelectItem value="pond">Farm Pond</SelectItem>
                  <SelectItem value="river">River</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-1/3">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button className="w-2/3 bg-green-600 hover:bg-green-700">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <p>This information helps us provide you with better crop recommendations and market insights.</p>
        </div>
      </main>
    </div>
  )
}
