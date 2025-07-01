"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Edit } from "lucide-react";

interface ProjectDetailsModalProps {
  project: any;
}

export function ProjectDetailsModal({ project }: ProjectDetailsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>
            Detailed project information and management
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Project Status</Label>
                  <Badge className="mt-1 bg-green-100 text-green-800">
                    {project.status}
                  </Badge>
                </div>
                <div>
                  <Label>Priority</Label>
                  <Badge className="mt-1 bg-red-100 text-red-800">
                    {project.priority}
                  </Badge>
                </div>
                <div>
                  <Label>Location</Label>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.location}
                  </p>
                </div>
                <div>
                  <Label>Phase</Label>
                  <p className="text-sm text-gray-600 mt-1">{project.phase}</p>
                </div>
              </div>
              <div>
                <Label>Progress</Label>
                <div className="mt-2">
                  <Progress value={project.progress} className="h-3" />
                  <p className="text-sm text-gray-600 mt-1">
                    {project.progress}% Complete
                  </p>
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  className="mt-1"
                  defaultValue="A modern office complex featuring sustainable design elements and state-of-the-art technology infrastructure."
                  rows={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    name: "John Smith",
                    role: "Project Manager",
                    avatar: "/placeholder.svg",
                  },
                  {
                    name: "Sarah Wilson",
                    role: "Site Engineer",
                    avatar: "/placeholder.svg",
                  },
                  {
                    name: "Mike Johnson",
                    role: "Safety Officer",
                    avatar: "/placeholder.svg",
                  },
                  {
                    name: "Lisa Chen",
                    role: "Architect",
                    avatar: "/placeholder.svg",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    <Avatar>
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="budget" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${(project.budget / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-600">Spent</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${(project.spent / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
              <div>
                <Label>Budget Breakdown</Label>
                <div className="space-y-2 mt-2">
                  {[
                    { category: "Materials", amount: 1200000, percentage: 48 },
                    { category: "Labor", amount: 750000, percentage: 30 },
                    { category: "Equipment", amount: 375000, percentage: 15 },
                    { category: "Overhead", amount: 175000, percentage: 7 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{item.category}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium">
                          ${(item.amount / 1000).toFixed(0)}K
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({item.percentage}%)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <div className="space-y-3">
                {[
                  { phase: "Planning", status: "completed", date: "Jan 2024" },
                  {
                    phase: "Foundation",
                    status: "completed",
                    date: "Feb 2024",
                  },
                  {
                    phase: "Structure",
                    status: "in-progress",
                    date: "Mar 2024",
                  },
                  {
                    phase: "MEP Installation",
                    status: "pending",
                    date: "Apr 2024",
                  },
                  { phase: "Finishing", status: "pending", date: "May 2024" },
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        milestone.status === "completed"
                          ? "bg-green-500"
                          : milestone.status === "in-progress"
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium">{milestone.phase}</p>
                      <p className="text-sm text-gray-600">{milestone.date}</p>
                    </div>
                    <Badge
                      className={
                        milestone.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : milestone.status === "in-progress"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {milestone.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ScrollArea>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Edit className="w-4 h-4 mr-2" />
            Edit Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
