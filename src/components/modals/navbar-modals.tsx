"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle,
  Star,
  Award,
  Building2,
} from "lucide-react";

export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-gray-700 hover:text-orange-600 whitespace-nowrap"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Welcome Back</DialogTitle>
          <DialogDescription>
            Sign in to your SiteSight account
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="text-sm text-orange-600 p-0">
                  Forgot password?
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Sign In
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full bg-transparent">
                  Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Microsoft
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email</Label>
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupPassword">Password</Label>
                <Input
                  id="signupPassword"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Button variant="link" className="text-orange-600 p-0 h-auto">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button variant="link" className="text-orange-600 p-0 h-auto">
                    Privacy Policy
                  </Button>
                </Label>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export function GetStartedModal() {
  const [step, setStep] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 whitespace-nowrap">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get Started with SiteSight</DialogTitle>
          <DialogDescription>
            Let&apos;s set up your construction management platform
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= i
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > i ? <CheckCircle className="w-4 h-4" /> : i}
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step > i ? "bg-orange-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <ScrollArea className="h-[400px] pr-4">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company Information</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your Construction Company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">
                        Residential Construction
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial Construction
                      </SelectItem>
                      <SelectItem value="industrial">
                        Industrial Construction
                      </SelectItem>
                      <SelectItem value="infrastructure">
                        Infrastructure
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="200+">200+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Primary Location</Label>
                  <Input id="location" placeholder="City, State/Country" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Setup</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName">First Project Name</Label>
                  <Input
                    id="projectName"
                    placeholder="Downtown Office Complex"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office Building</SelectItem>
                      <SelectItem value="residential">
                        Residential Complex
                      </SelectItem>
                      <SelectItem value="retail">Retail/Shopping</SelectItem>
                      <SelectItem value="warehouse">
                        Warehouse/Industrial
                      </SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <Input id="budget" type="number" placeholder="2500000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Expected End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Team Setup</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Initial Team Size</Label>
                  <Input id="teamSize" type="number" placeholder="25" />
                </div>
                <div className="space-y-2">
                  <Label>Key Roles to Add</Label>
                  <div className="space-y-2">
                    {[
                      "Site Manager",
                      "Safety Officer",
                      "Project Engineer",
                      "Quality Inspector",
                      "Procurement Manager",
                    ].map((role) => (
                      <div key={role} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={role}
                          defaultChecked
                          className="rounded"
                        />
                        <Label htmlFor={role} className="text-sm">
                          {role}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notifications">
                    Notification Preferences
                  </Label>
                  <div className="space-y-2">
                    {[
                      "Email notifications",
                      "SMS alerts for critical issues",
                      "Daily progress reports",
                      "Weekly team summaries",
                    ].map((pref) => (
                      <div key={pref} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={pref}
                          defaultChecked
                          className="rounded"
                        />
                        <Label htmlFor={pref} className="text-sm">
                          {pref}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            Previous
          </Button>
          {step < 3 ? (
            <Button
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => setStep(step + 1)}
            >
              Next
            </Button>
          ) : (
            <Button className="bg-orange-500 hover:bg-orange-600">
              Complete Setup
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DemoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-orange-300 hover:border-orange-400 text-orange-600 hover:text-orange-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
        >
          Watch Demo
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>SiteSight Platform Demo</DialogTitle>
          <DialogDescription>
            See how SiteSight transforms construction management
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  Platform Overview Video
                </p>
                <p className="text-sm text-gray-600">3:45 minutes</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">What you&apos;ll see:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    Real-time project tracking and progress monitoring
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI-powered insights and predictive analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Team collaboration and communication tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Budget management and cost optimization</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {[
                  {
                    title: "Project Progress Tracking",
                    description:
                      "Visual dashboards showing real-time progress across all project phases",
                    time: "0:45",
                  },
                  {
                    title: "AI-Driven Insights",
                    description:
                      "Predictive analytics for risk assessment and optimization recommendations",
                    time: "1:20",
                  },
                  {
                    title: "Team Gamification",
                    description:
                      "XP system, leaderboards, and achievement badges to boost engagement",
                    time: "2:10",
                  },
                  {
                    title: "Budget & Procurement",
                    description:
                      "Automated cost tracking and intelligent material ordering system",
                    time: "2:45",
                  },
                  {
                    title: "Safety & Compliance",
                    description:
                      "Digital inspections, incident reporting, and compliance monitoring",
                    time: "3:15",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{feature.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {feature.time}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  Interactive Dashboard Tour
                </p>
                <p className="text-sm text-gray-600">2:30 minutes</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium">Dashboard Features:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Real-time metrics</li>
                  <li>• Project health indicators</li>
                  <li>• Team performance tracking</li>
                  <li>• Budget analytics</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Customization:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Personalized widgets</li>
                  <li>• Custom reports</li>
                  <li>• Role-based views</li>
                  <li>• Notification settings</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Phone className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  Mobile App Demo
                </p>
                <p className="text-sm text-gray-600">1:45 minutes</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Mobile Capabilities:</h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Offline-first design for construction sites",
                  "Photo and video documentation",
                  "QR code scanning for equipment and materials",
                  "Push notifications for critical updates",
                  "GPS tracking for site check-ins",
                  "Voice-to-text for quick reporting",
                ].map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Live Demo
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Play className="w-4 h-4 mr-2" />
            Start Free Trial
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function StartBuildingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play className="w-5 h-5 mr-2" />
          Start Building Smarter
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Start Your Construction Revolution</DialogTitle>
          <DialogDescription>
            Choose how you&apos;d like to begin with SiteSight
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="p-6 border-2 border-orange-200 hover:border-orange-300 transition-colors cursor-pointer rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Free 30-Day Trial
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get full access to all features with no commitment.
                      Perfect for testing with your team.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Complete platform access",
                        "Up to 50 team members",
                        "Unlimited projects",
                        "24/7 support",
                        "No credit card required",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-blue-200 hover:border-blue-300 transition-colors cursor-pointer rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Guided Demo</h3>
                    <p className="text-gray-600 mb-4">
                      Schedule a personalized walkthrough with our construction
                      experts.
                    </p>
                    <div className="space-y-2">
                      {[
                        "1-on-1 platform tour",
                        "Custom use case examples",
                        "Integration planning",
                        "ROI calculation",
                        "Implementation roadmap",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-purple-200 hover:border-purple-300 transition-colors cursor-pointer rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Enterprise Consultation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For large organizations needing custom solutions and
                      enterprise features.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Custom implementation plan",
                        "Dedicated success manager",
                        "Advanced integrations",
                        "Custom training program",
                        "Priority support",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">
                  Why Choose SiteSight?
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>40% faster project completion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>25% cost reduction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>90% team satisfaction</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Zero safety incidents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Real-time collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>AI-powered insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Learn More</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Get Started Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
