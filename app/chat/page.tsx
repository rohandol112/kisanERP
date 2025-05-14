import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ImageIcon, Mic, Paperclip, Send } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link href="/bid-details" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Agro Traders</h1>
            <p className="text-xs text-gray-500">Online • Usually responds in 10 minutes</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="font-medium text-blue-700">AT</span>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Buyer Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">Hello! I'm interested in your wheat listing. Is it still available?</p>
            <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
          </div>
        </div>

        {/* Farmer Message */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">Yes, I have 500kg of Grade A wheat available.</p>
            <p className="text-xs text-green-200 mt-1">10:32 AM</p>
          </div>
        </div>

        {/* Buyer Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">Great! I've placed a bid for ₹24/kg. Can you tell me more about the quality?</p>
            <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
          </div>
        </div>

        {/* Farmer Message */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">
              It's freshly harvested last month, moisture content is 12%, and it's free from pests and foreign matter.
            </p>
            <p className="text-xs text-green-200 mt-1">10:38 AM</p>
          </div>
        </div>

        {/* Buyer Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">
              Sounds good. Would it be possible to see some more photos of the wheat before I finalize?
            </p>
            <p className="text-xs text-gray-500 mt-1">10:40 AM</p>
          </div>
        </div>

        {/* Farmer Message with Image */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <div className="bg-green-500 h-40 rounded mb-2 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-green-200" />
            </div>
            <p className="text-sm">Here's a close-up of the wheat grains.</p>
            <p className="text-xs text-green-200 mt-1">10:42 AM</p>
          </div>
        </div>

        {/* Buyer Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">
              Perfect! The quality looks good. I'm happy with my bid of ₹24/kg. When would you be able to arrange
              delivery?
            </p>
            <p className="text-xs text-gray-500 mt-1">10:45 AM</p>
          </div>
        </div>

        {/* Today Marker */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 rounded-full px-3 py-1">
            <p className="text-xs text-gray-600">Today</p>
          </div>
        </div>

        {/* Farmer Message */}
        <div className="flex justify-end">
          <div className="bg-green-600 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">I can arrange for it to be ready for pickup by May 15th. Does that work for you?</p>
            <p className="text-xs text-green-200 mt-1">9:15 AM</p>
          </div>
        </div>

        {/* Buyer Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-sm">
              Yes, May 15th works perfectly. I'll arrange for transportation. Looking forward to doing business with
              you!
            </p>
            <p className="text-xs text-gray-500 mt-1">9:20 AM</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white p-3 border-t">
        <div className="container mx-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Mic className="h-5 w-5" />
          </Button>
          <Input className="flex-1" placeholder="Type a message..." />
          <Button size="icon" className="rounded-full bg-green-600 hover:bg-green-700">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Quick Responses */}
      <div className="bg-white p-3 border-t">
        <div className="container mx-auto flex gap-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs h-8">
            Yes, it's available
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs h-8">
            I can negotiate the price
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs h-8">
            When can you pick up?
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs h-8">
            Payment details
          </Button>
        </div>
      </div>
    </div>
  )
}
