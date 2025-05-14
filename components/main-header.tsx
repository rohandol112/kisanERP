import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search } from "lucide-react"
import Link from "next/link"
import NotificationPanel from "@/app/components/notification-panel"

interface MainHeaderProps {
  title?: string
  user?: {
    name: string
    initials: string
    image?: string
  }
}

export default function MainHeader({ title, user = { name: "Rajesh Kumar", initials: "RK" } }: MainHeaderProps) {
  return (
    <header className="bg-white p-4 border-b flex items-center justify-between">
      <div className="flex items-center">
        {title && <h1 className="font-semibold text-lg mr-6">{title}</h1>}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input className="pl-9 w-64" placeholder="Search..." />
        </div>
        <NotificationPanel />
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>{user.initials}</AvatarFallback>
            {user.image && <AvatarImage src={user.image} />}
          </Avatar>
          <Link href="/profile">
            <span className="font-medium">{user.name}</span>
          </Link>
        </div>
      </div>
    </header>
  )
} 