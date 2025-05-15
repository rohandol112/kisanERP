import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Package, UserPlus } from "lucide-react"

export default function SignUpPage() {
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Join the KisanERP network</h2>
          <p className="text-green-700 mb-8">
            Create an account to access real-time market insights, connect with buyers, and manage your agricultural business efficiently.
          </p>
          
          <div className="hidden md:block">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-green-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 16.17L4.82999 12L3.40999 13.41L8.99999 19L21 7.00001L19.59 5.59001L8.99999 16.17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-green-800">Real-time market prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 16.17L4.82999 12L3.40999 13.41L8.99999 19L21 7.00001L19.59 5.59001L8.99999 16.17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-green-800">Secure bidding platform</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 16.17L4.82999 12L3.40999 13.41L8.99999 19L21 7.00001L19.59 5.59001L8.99999 16.17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-green-800">Inventory management</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 16.17L4.82999 12L3.40999 13.41L8.99999 19L21 7.00001L19.59 5.59001L8.99999 16.17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-green-800">Direct buyer communication</span>
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
      
      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-2">Create Your Account</CardTitle>
            <CardDescription className="text-center">Enter your details to get started</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-type">I am a</Label>
              <Select defaultValue="farmer">
                <SelectTrigger id="user-type">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            
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
              <p className="text-xs text-gray-500">We'll send you an OTP to verify this number</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Create Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Primary Location</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="mp">Madhya Pradesh</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs text-gray-500">
                I agree to the{" "}
                <Link href="/terms" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Link href="/auth/verify">
              <Button className="w-full bg-green-600 hover:bg-green-700 mt-2">
                Create Account <UserPlus className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="text-center w-full">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-green-600 hover:underline font-medium">
                  Login
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 