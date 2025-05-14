import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BarChart3, ClipboardList, CreditCard, Database, FileText, LayoutDashboard, LineChart, MessageSquare, Package, Search, Settings, ShoppingCart, Truck, UserCheck, UserCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed h-full">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500 text-white font-bold">
              KE
            </div>
            <div>
              <h1 className="font-bold">KisanERP</h1>
              <p className="text-xs text-gray-400">kisanerp-farmer.com</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="flex items-center gap-3 px-3 py-2 text-white bg-gray-800 rounded"
              >
                <LayoutDashboard className="h-5 w-5 text-emerald-500" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/inventory" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <Package className="h-5 w-5" />
                <span>Inventory</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/market" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Market</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/logistics" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <Truck className="h-5 w-5" />
                <span>Logistics</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/insights" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Insights</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/analytics" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <LineChart className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/reports" 
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              >
                <FileText className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-800">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/settings" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/profile" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-gray-900 border-b-2 border-emerald-500 pb-4 pt-4 -mt-4 -mb-4 font-semibold text-lg mr-6">Home</Link>
            <Link href="/inventory" className="text-gray-500 hover:text-gray-900">Inventory</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-9 w-64" placeholder="Search..." />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Try Now</Button>
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                <span className="text-xs">RR</span>
              </div>
              <span className="font-medium">Rajesh Rajput</span>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-16 flex items-center">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Trade, Streamlined</h1>
              <p className="text-lg text-gray-600 mb-8">
                We are giving the solution that streamlines agricultural trade delivering AI-backed, real-time market
                insights tailored to each farmer's region and crop. The system connects farmer and Middleman
                through a secure, efficient, and transparent digital marketplace.
              </p>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2">
                  Get Started
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-1/2">
              <Image 
                src="/Untitled design (68).png" 
                alt="Farmer" 
                width={500} 
                height={400} 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Key Features</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our platform offers comprehensive tools to streamline agricultural trading and 
              maximize profits for farmers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-emerald-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time AI Insights</h3>
                  <p className="text-gray-600">
                    Delivers crop price updates tailored to farmers' locations using real-time supply and demand analytics, 
                    empowering smarter and more profitable sales.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-blue-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Seamless P2P Bidding</h3>
                  <p className="text-gray-600">
                    Let buyers submit fair bids while enabling farmers to confidently list produce with 
                    transparent pricing visibility.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-purple-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Inventory & Cost Management</h3>
                  <p className="text-gray-600">
                    Helps farmers track inventory, log production expenses, and price products effectively
                    based on potential profit margins.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-amber-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Trade Lifecycle</h3>
                  <p className="text-gray-600">
                    Manages the full trading journey—from listing and messaging to payments,
                    delivery coordination, invoicing, and reviews.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-red-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Admin Monitoring for Integrity</h3>
                  <p className="text-gray-600">
                    Admin panels detect bid irregularities, price gaps, and suspicious users, maintaining
                    fairness and trust within the platform.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-teal-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-600">
                    Integrated payment system ensures timely and secure transactions between buyers and farmers,
                    with automated invoicing and receipt generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Agricultural Business?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
              Join thousands of farmers who are already using KisanERP to increase their profits 
              and streamline their agricultural trading.
            </p>
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 text-lg font-medium">
              Get Started Now
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-2 text-xs font-bold">
                    KE
                  </div>
                  KisanERP
                </h3>
                <p className="max-w-xs">
                  Streamlining agricultural trade with AI-powered insights and a secure marketplace.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Features</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Real-Time Insights</a></li>
                  <li><a href="#" className="hover:text-white">P2P Bidding</a></li>
                  <li><a href="#" className="hover:text-white">Inventory Management</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
              &copy; 2025 KisanERP. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
