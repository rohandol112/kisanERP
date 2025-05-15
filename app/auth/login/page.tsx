import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, KeyRound, Smartphone } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 flex flex-col md:flex-row">
      {/* Left Side - Info Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold">KE</span>
            </div>
            <h1 className="text-2xl font-bold text-green-800">KisanERP</h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Welcome back to KisanERP</h2>
          <p className="text-green-700 mb-8">
            India's premier platform connecting farmers directly with buyers. Get AI-powered insights, transparent bidding, and end-to-end transaction management.
          </p>
          
          <div className="hidden md:block">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-green-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Smartphone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">Simple Login</h3>
                  <p className="text-sm text-green-700">Use your mobile number to receive an OTP for secure login</p>
                </div>
              </div>
              
              <Image 
                src="/Untitled design (68).png" 
                alt="Farmer illustration" 
                width={300} 
                height={200} 
                className="rounded-lg mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <Tabs defaultValue="mobile" className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-2">Login to Your Account</CardTitle>
              <CardDescription className="text-center">Choose your preferred login method</CardDescription>
              <TabsList className="grid w-full grid-cols-2 mt-4">
                <TabsTrigger value="mobile">Mobile OTP</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <TabsContent value="mobile" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="flex">
                    <div className="bg-gray-100 px-3 py-2 border border-r-0 border-input rounded-l-md text-sm text-gray-500">
                      +91
                    </div>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="98765 43210" 
                      className="rounded-l-none" 
                    />
                  </div>
                </div>
                
                <Link href="/auth/verify">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Send OTP <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </TabsContent>
              
              <TabsContent value="password" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Mobile Number</Label>
                  <Input id="email" type="text" placeholder="Enter your email or mobile number" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/auth/forgot-password" className="text-xs text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer">
                    Remember me for 30 days
                  </label>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Login <KeyRound className="ml-2 h-4 w-4" />
                </Button>
              </TabsContent>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 border-t pt-6">
              <div className="text-center w-full">
                <p className="text-sm text-gray-500 mb-4">
                  Don't have an account yet?{" "}
                  <Link href="/auth/signup" className="text-green-600 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
                
                <p className="text-xs text-gray-400">
                  By continuing, you agree to our{" "}
                  <Link href="/terms" className="text-gray-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-gray-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </div>
  )
} 