"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Check, MessageSquare, ShoppingBag, Tag } from "lucide-react"
import { useState } from "react"

interface Notification {
  id: string
  type: "bid" | "message" | "transaction" | "price"
  title: string
  description: string
  time: string
  read: boolean
}

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "bid",
      title: "New Bid Received",
      description: "Agro Traders placed a bid of ₹24/kg for your wheat listing",
      time: "10m ago",
      read: false,
    },
    {
      id: "2",
      type: "message",
      title: "New Message",
      description: "FoodWorks Inc. sent you a message about your rice listing",
      time: "2h ago",
      read: false,
    },
    {
      id: "3",
      type: "transaction",
      title: "Transaction Completed",
      description: "Your transaction #TRX12345 with Agro Traders is complete",
      time: "1d ago",
      read: true,
    },
    {
      id: "4",
      type: "price",
      title: "Price Alert",
      description: "Wheat prices have increased by 5% in your region",
      time: "2d ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, read: true }))
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-8" onClick={markAllAsRead}>
              <Check className="h-3 w-3 mr-1" /> Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="text-center py-4 text-sm text-gray-500">
            No notifications yet
          </div>
        ) : (
          notifications.map(notification => (
            <DropdownMenuItem key={notification.id} className="p-0 focus:bg-gray-100">
              <button
                className={`w-full p-3 text-left flex gap-3 ${notification.read ? "opacity-70" : ""}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div>
                  <div className="rounded-full h-10 w-10 flex items-center justify-center">
                    {notification.type === "bid" && (
                      <Tag className="h-5 w-5 text-blue-600" />
                    )}
                    {notification.type === "message" && (
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    )}
                    {notification.type === "transaction" && (
                      <ShoppingBag className="h-5 w-5 text-purple-600" />
                    )}
                    {notification.type === "price" && (
                      <Avatar className="h-10 w-10 bg-yellow-100 border border-yellow-200">
                        <AvatarFallback className="text-yellow-700 text-xs">₹</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-sm flex items-center">
                      {notification.title}
                      {!notification.read && (
                        <Badge className="ml-2 h-2 w-2 p-0 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{notification.time}</div>
                  </div>
                  <p className="text-xs text-gray-600">{notification.description}</p>
                </div>
              </button>
            </DropdownMenuItem>
          ))
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <div className="text-center py-2 text-xs text-blue-600 font-medium">
            View all notifications
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 