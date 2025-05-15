import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, KeyRound, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <KeyRound className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl mb-2">Reset Your Password</CardTitle>
          <CardDescription>
            Enter your email or mobile number and we'll send you instructions to reset your password
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-mobile">Email or Mobile Number</Label>
            <Input 
              id="email-mobile" 
              type="text" 
              placeholder="Enter your email or mobile number" 
            />
          </div>
          
          <Link href="/auth/verify">
            <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
              Send Reset Instructions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 border-t pt-6">
          <div className="text-center w-full">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-green-600 hover:underline font-medium">
                Back to login
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
} 