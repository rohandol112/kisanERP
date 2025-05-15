import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, RefreshCw, ShieldCheck } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl mb-2">Verify Your Number</CardTitle>
          <CardDescription>
            We've sent a 6-digit code to <span className="font-medium">+91 98765 43210</span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="otp" className="text-center block">Enter verification code</Label>
            <div className="flex justify-center">
              <InputOTP maxLength={6} className="gap-2">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
          
          <Link href="/">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Verify & Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              Didn't receive the code?{" "}
              <button className="text-green-600 hover:underline font-medium inline-flex items-center">
                Resend <RefreshCw className="ml-1 h-3 w-3" />
              </button>
            </p>
            <p className="text-xs text-gray-400">You can request a new code in 30 seconds</p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 border-t pt-6">
          <div className="text-center w-full">
            <p className="text-sm text-gray-500">
              <Link href="/auth/login" className="text-green-600 hover:underline flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg> 
                Back to login
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
} 