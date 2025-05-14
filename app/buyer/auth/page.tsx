import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart } from "lucide-react"

export default function BuyerAuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-800">KisanERP</h1>
          <p className="text-blue-700 mt-1">Buyer Portal</p>
        </div>

        {/* Auth Card */}
        <Card className="w-full">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="login" className="mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
                  <div className="text-center">
                    <Button variant="link" className="text-blue-600">
                      Forgot password?
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="register" className="mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="company-name" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input id="company-name" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gstin" className="text-sm font-medium">
                      GSTIN
                    </label>
                    <Input id="gstin" placeholder="Enter your GSTIN" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="reg-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-phone" className="text-sm font-medium">
                      Mobile Number
                    </label>
                    <Input id="reg-phone" type="tel" placeholder="Enter your mobile number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input id="reg-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Register</Button>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-center w-full">
              <p className="text-sm text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
