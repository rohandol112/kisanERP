import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package } from "lucide-react"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center mb-4">
            <Package className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-green-800">KisanERP</h1>
          <p className="text-green-700 mt-1">Empowering farmers with technology</p>
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
                    <label htmlFor="phone" className="text-sm font-medium">
                      Mobile Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your mobile number" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send OTP</Button>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">or login with</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Aadhar Verification
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="register" className="mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-phone" className="text-sm font-medium">
                      Mobile Number
                    </label>
                    <Input id="reg-phone" type="tel" placeholder="Enter your mobile number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="aadhar" className="text-sm font-medium">
                      Aadhar Number (Optional)
                    </label>
                    <Input id="aadhar" placeholder="Enter your Aadhar number" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
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
