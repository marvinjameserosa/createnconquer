"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ProjectDetailsModal } from "@/components/modals/project-details-modal";

interface Project {
  id: string | number;
  name: string;
  status: string; 
  priority: string; 
  location: string;
  phase: string;
  health: string;  
  progress: number;
  budget: number;
  spent: number;
  team: string | number;
  deadline: string | Date;
}

interface ProjectHealthCardProps {
  project: Project;
}

export function ProjectHealthCard({ project }: ProjectHealthCardProps) {
  const statusColors: Record<string, string> = {
    "On Track": "bg-green-100 text-green-800 border-green-200",
    Delayed: "bg-red-100 text-red-800 border-red-200",
    Ahead: "bg-blue-100 text-blue-800 border-blue-200",
  };

  const healthColors: Record<string, string> = {
    excellent: "text-green-600",
    good: "text-blue-600",
    warning: "text-yellow-600",
    critical: "text-red-600",
  };

  const priorityColors: Record<string, string> = {
    high: "border-l-red-500",
    medium: "border-l-yellow-500",
    low: "border-l-green-500",
  };

  const getPriorityColor = (priority: string): string => 
    priorityColors[priority] || "border-l-gray-500";
  
  const getStatusColor = (status: string): string => 
    statusColors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  
  const getHealthColor = (health: string): string => 
    healthColors[health] || "text-gray-600";

  return (
    <Card
      className={`border-l-4 ${
        getPriorityColor(project.priority)
      } hover:shadow-lg transition-all duration-300`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {project.name}
          </CardTitle>
          <Badge
            className={`${getStatusColor(project.status)} border font-medium`}
          >
            {project.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center justify-between">
          <span className="text-gray-600">
            {project.location} • {project.phase}
          </span>
          <span
            className={`text-sm font-medium ${getHealthColor(project.health)}`}
          >
            {project.health.charAt(0).toUpperCase() + project.health.slice(1)}{" "}
            Health
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Progress</span>
              <span className="font-semibold text-gray-900">
                {project.progress}%
              </span>
            </div>
            <Progress value={project.progress} className="h-3" />
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-gray-600 text-xs font-medium">Budget</div>
              <div className="font-bold text-gray-900">
                ${(project.budget / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-gray-600 text-xs font-medium">Team</div>
              <div className="font-bold text-gray-900">{project.team}</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-gray-600 text-xs font-medium">Days Left</div>
              <div className="font-bold text-gray-900">
                {Math.ceil(
                  (new Date(project.deadline).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-gray-500">
              Due: {new Date(project.deadline).toLocaleDateString()}
            </span>
            <ProjectDetailsModal project={project} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}