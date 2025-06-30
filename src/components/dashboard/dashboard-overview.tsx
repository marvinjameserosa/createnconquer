"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Building2,
  Users,
  TrendingUp,
  AlertTriangle,
  Trophy,
  DollarSign,
  Zap,
  Package,
  Calendar,
  CheckSquare,
  FileText,
  Brain,
  Activity,
} from "lucide-react";
import { dashboardData } from "@/lib/data";
import { MetricCard } from "./cards/metric-card";
import { ProjectHealthCard } from "./cards/project-health-card";
import { QuickActionCard } from "./cards/quick-action-card";
import {
  CreateTaskModal,
  ScheduleInspectionModal,
  OrderMaterialsModal,
  GenerateReportModal,
} from "@/components/modals/quick-action-modals";

export function DashboardOverview() {
  const {
    projects,
    attendance,
    leaderboard,
    aiInsights,
    recentActivity,
    budget,
    issues,
    inspections,
  } = dashboardData;

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const avgProgress = Math.round(
    projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
  );
  const openIssues = issues.filter((issue) => issue.status === "open").length;
  const completedInspections = inspections.filter(
    (inspection) => inspection.status === "completed"
  ).length;

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Projects"
          value={projects.length}
          change={12}
          icon={Building2}
          color="orange"
        />
        <MetricCard
          title="Team Members"
          value={attendance.today.total}
          change={5}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Budget Efficiency"
          value={`${Math.round((totalSpent / totalBudget) * 100)}%`}
          change={-3}
          icon={DollarSign}
          color="green"
          trend="down"
        />
        <MetricCard
          title="Avg Progress"
          value={`${avgProgress}%`}
          change={8}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projects */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  <span>Active Projects</span>
                </div>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {projects.map((project) => (
                    <ProjectHealthCard key={project.id} project={project} />
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickActionCard
                  title="Create New Task"
                  description="Assign work to team members"
                  icon={CheckSquare}
                  color="from-blue-500 to-blue-600"
                >
                  <CreateTaskModal />
                </QuickActionCard>
                <QuickActionCard
                  title="Schedule Inspection"
                  description="Plan safety or quality checks"
                  icon={Calendar}
                  color="from-green-500 to-green-600"
                >
                  <ScheduleInspectionModal />
                </QuickActionCard>
                <QuickActionCard
                  title="Order Materials"
                  description="Manage procurement requests"
                  icon={Package}
                  color="from-purple-500 to-purple-600"
                >
                  <OrderMaterialsModal />
                </QuickActionCard>
                <QuickActionCard
                  title="Generate Report"
                  description="Create stakeholder updates"
                  icon={FileText}
                  color="from-orange-500 to-orange-600"
                >
                  <GenerateReportModal />
                </QuickActionCard>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-orange-500" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  {aiInsights.slice(0, 3).map((insight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-gray-900">
                          {insight.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        {insight.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-orange-200 text-orange-800 text-xs border-0">
                          {insight.impact}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {insight.confidence}% confidence
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Team Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span>Top Performers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px] pr-4">
                <div className="space-y-3">
                  {leaderboard.slice(0, 5).map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="text-lg font-bold text-gray-500 w-8">
                        {user.badge || user.rank}
                      </div>
                      <Avatar className="w-10 h-10 border-2 border-orange-200">
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback className="text-sm bg-orange-100 text-orange-600">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {user.xp} XP
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-orange-500" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px] pr-4">
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          {activity.action}{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      {activity.xp && (
                        <Badge className="bg-orange-100 text-orange-700 text-xs border-0">
                          +{activity.xp} XP
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
