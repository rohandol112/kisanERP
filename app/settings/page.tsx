import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  HelpCircle,
  Languages,
  Lock,
  LogOut,
  Shield,
  User,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
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
          <h1 className="text-xl font-bold text-green-800">Settings & Profile</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        {/* Profile Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold">Rajesh Kumar</h2>
                <p className="text-sm text-gray-500">Farmer ID: F12345</p>
                <p className="text-sm text-gray-500">+91 98765 43210</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Account Settings</h3>
          <div className="space-y-2">
            <SettingsItem icon={<User className="h-5 w-5" />} label="Personal Information" />
            <SettingsItem icon={<Lock className="h-5 w-5" />} label="Change Password" />
            <SettingsItem icon={<Shield className="h-5 w-5" />} label="Privacy & Security" />
            <SettingsItem icon={<CreditCard className="h-5 w-5" />} label="Bank Account Details" />
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Preferences</h3>
          <Card className="mb-3">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-sm text-gray-500">Manage your notification preferences</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-3">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-gray-500">English</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-gray-500" />
                  <Label htmlFor="price-alerts" className="font-medium">
                    Price Alerts
                  </Label>
                </div>
                <Switch id="price-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-gray-500" />
                  <Label htmlFor="expiry-alerts" className="font-medium">
                    Expiry Alerts
                  </Label>
                </div>
                <Switch id="expiry-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-gray-500" />
                  <Label htmlFor="bid-alerts" className="font-medium">
                    Bid Alerts
                  </Label>
                </div>
                <Switch id="bid-alerts" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data & Storage */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Data & Storage</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Offline Mode</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Enable offline data entry</p>
                    <Switch id="offline-mode" defaultChecked />
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-1">Storage Used</p>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 w-[35%]"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">35 MB of 100 MB used</p>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Clear Cache
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support & About */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Support & About</h3>
          <div className="space-y-2">
            <SettingsItem icon={<HelpCircle className="h-5 w-5" />} label="Help & Support" />
            <SettingsItem icon={<Shield className="h-5 w-5" />} label="Terms & Conditions" />
            <SettingsItem icon={<Shield className="h-5 w-5" />} label="Privacy Policy" />
            <SettingsItem icon={<HelpCircle className="h-5 w-5" />} label="About KisanERP" />
          </div>
        </div>

        <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" /> Log Out
        </Button>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">Version 1.0.0</p>
        </div>
      </main>
    </div>
  )
}

interface SettingsItemProps {
  icon: React.ReactNode
  label: string
}

function SettingsItem({ icon, label }: SettingsItemProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <p className="font-medium">{label}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}
