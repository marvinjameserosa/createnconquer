// Centralized data management for the entire application

// Landing Page Data
export const landingData = {
  hero: {
    badge: "Revolutionizing Construction Management",
    title: {
      main: "Build Smarter with",
      highlight: "AI-Powered Construction Management",
    },
    description:
      "Transform your construction projects with intelligent automation, real-time insights, and seamless collaboration. From planning to handover, we've got you covered.",
    buttons: {
      primary: { text: "Start Free Trial", icon: "Play" },
      secondary: { text: "Watch Demo", icon: "ArrowRight" },
    },
    stats: [
      { value: 500, suffix: "+", label: "Projects Completed" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
      { value: 40, suffix: "%", label: "Time Saved" },
      { value: 2.5, suffix: "M", label: "Cost Savings" },
    ],
  },

  features: [
    {
      icon: "BarChart3",
      title: "Project Progress Tracker",
      description:
        "Track construction milestones and task completion through visual dashboards, enabling real-time monitoring of on-site and off-site progress.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "Package",
      title: "Procurement Management",
      description:
        "Streamline sourcing, ordering, and delivery of materials with automated tracking to avoid delays and cost overruns.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: "Calendar",
      title: "Task & Activity Scheduling",
      description:
        "Organize workflows with dynamic scheduling tools, enabling team coordination, deadline tracking, and resource planning.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: "DollarSign",
      title: "Budget & Cost Tracking",
      description:
        "Monitor expenditures with real-time cost analytics, variance alerts, and financial forecasting tools.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: "Users",
      title: "Resource Allocation",
      description:
        "Optimize assignment of labor, machinery, and materials to specific tasks, ensuring maximum productivity.",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: "AlertTriangle",
      title: "Issue & Risk Management",
      description:
        "Log safety concerns and technical issues with tools for resolution assignment, escalation, and status updates.",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: "CheckCircle",
      title: "Site Inspection & Compliance",
      description:
        "Digitally manage site inspections, safety audits, and compliance checks with customizable templates.",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: "FileText",
      title: "Daily Logs & Work Reports",
      description:
        "Automatically generate daily site logs including work completed, labor hours, and material usage.",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: "Handshake",
      title: "Subcontractor Coordination",
      description:
        "Assign and monitor subcontractor deliverables, track completion status, and ensure workflow integration.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: "Brain",
      title: "AI-Driven Project Insights",
      description:
        "Leverage AI to identify patterns, forecast delays, and recommend cost-saving measures based on real-time data.",
      gradient: "from-violet-500 to-violet-600",
    },
    {
      icon: "FileBarChart",
      title: "Stakeholder Document Generator",
      description:
        "Automatically create structured reports and executive summaries tailored for stakeholders with charts and milestones.",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: "Map",
      title: "Live 3D Map Environment Analysis",
      description:
        "Visualize the site in 3D to assess terrain, infrastructure, and environmental factors for smarter planning.",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Project Manager",
      company: "BuildTech Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "SiteSight transformed our construction workflow completely. The AI predictions helped us avoid 3 major delays and the procurement management saved us $500K in material costs.",
      rating: 5,
      stats: "40% productivity increase",
      projectType: "Commercial Complex",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Site Supervisor",
      company: "Urban Development Corp",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The real-time progress tracking and automated reporting features are game-changers. Our stakeholders love the transparency, and the compliance management keeps us audit-ready.",
      rating: 5,
      stats: "60% faster approvals",
      projectType: "Residential Tower",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Construction Director",
      company: "Skyline Builders",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Best investment we've made. The budget tracking caught potential overruns early, saving us $2M. The AI insights help us make data-driven decisions every day.",
      rating: 5,
      stats: "$2M saved in overruns",
      projectType: "Mixed-Use Development",
    },
  ],

  pricing: [
    {
      name: "Starter",
      price: "$99",
      period: "per project/month",
      description: "Perfect for small construction projects",
      features: [
        "Up to 25 team members",
        "Basic progress tracking",
        "Task scheduling",
        "Budget monitoring",
        "Standard reports",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "per project/month",
      description: "Ideal for medium to large projects",
      features: [
        "Up to 100 team members",
        "Advanced analytics",
        "Procurement management",
        "AI insights",
        "Compliance tracking",
        "Subcontractor coordination",
        "Priority support",
        "Custom reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large-scale construction operations",
      features: [
        "Unlimited team members",
        "Custom integrations",
        "Advanced AI modules",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security",
        "Custom training",
      ],
      popular: false,
    },
  ],

  cta: {
    title: "Ready to revolutionize your construction projects?",
    description:
      "Join thousands of construction professionals building smarter with SiteSight's comprehensive platform.",
    buttons: {
      primary: { text: "Start Free Trial", icon: "Play" },
      secondary: { text: "Schedule Demo", icon: "ArrowRight" },
    },
    features: [
      {
        icon: "Shield",
        title: "Enterprise Security",
        description: "Bank-level encryption",
      },
      {
        icon: "Clock",
        title: "24/7 Support",
        description: "Always here to help",
      },
      {
        icon: "TrendingUp",
        title: "Proven Results",
        description: "40% time savings",
      },
    ],
  },
};

// Dashboard Data
export const dashboardData = {
  user: {
    name: "John Smith",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    badges: ["Safety Champion", "Team Leader", "Efficiency Expert"],
    streak: 15,
  },

  projects: [
    {
      id: 1,
      name: "Downtown Office Complex",
      progress: 87,
      status: "On Track",
      deadline: "2024-03-15",
      budget: 2500000,
      spent: 2175000,
      team: 24,
      priority: "high",
      location: "New York, NY",
      phase: "Construction",
      health: "good",
    },
    {
      id: 2,
      name: "Residential Tower A",
      progress: 65,
      status: "Delayed",
      deadline: "2024-05-20",
      budget: 1800000,
      spent: 1170000,
      team: 18,
      priority: "medium",
      location: "Los Angeles, CA",
      phase: "Foundation",
      health: "warning",
    },
    {
      id: 3,
      name: "Shopping Mall Renovation",
      progress: 92,
      status: "Ahead",
      deadline: "2024-02-28",
      budget: 950000,
      spent: 874000,
      team: 12,
      priority: "low",
      location: "Chicago, IL",
      phase: "Finishing",
      health: "excellent",
    },
  ],

  tasks: [
    {
      id: 1,
      title: "Install HVAC System",
      project: "Downtown Office Complex",
      assignee: "Mike Johnson",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-01-20",
      progress: 75,
      xpReward: 150,
    },
    {
      id: 2,
      title: "Electrical Wiring - Floor 3",
      project: "Downtown Office Complex",
      assignee: "Sarah Wilson",
      priority: "medium",
      status: "pending",
      dueDate: "2024-01-22",
      progress: 0,
      xpReward: 120,
    },
  ],

  procurement: [
    {
      id: 1,
      item: "Steel Beams",
      quantity: 150,
      unit: "tons",
      supplier: "MetalCorp Inc",
      status: "delivered",
      orderDate: "2024-01-10",
      deliveryDate: "2024-01-18",
      cost: 75000,
      project: "Downtown Office Complex",
    },
    {
      id: 2,
      item: "Concrete Mix",
      quantity: 500,
      unit: "cubic meters",
      supplier: "ConcretePro",
      status: "in-transit",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-22",
      cost: 25000,
      project: "Residential Tower A",
    },
  ],

  budget: {
    totalBudget: 5250000,
    totalSpent: 4219000,
    remaining: 1031000,
    categories: [
      {
        name: "Materials",
        budgeted: 2100000,
        spent: 1890000,
        variance: -210000,
      },
      { name: "Labor", budgeted: 1575000, spent: 1420000, variance: -155000 },
      { name: "Equipment", budgeted: 787500, spent: 650000, variance: -137500 },
      { name: "Overhead", budgeted: 787500, spent: 259000, variance: -528500 },
    ],
  },

  issues: [
    {
      id: 1,
      title: "Safety Violation - Hard Hat Area",
      type: "safety",
      severity: "high",
      status: "open",
      reporter: "Safety Inspector",
      assignee: "Site Manager",
      project: "Downtown Office Complex",
      createdAt: "2024-01-18",
      description:
        "Workers observed without proper safety equipment in designated hard hat zone.",
    },
    {
      id: 2,
      title: "Material Delivery Delay",
      type: "logistics",
      severity: "medium",
      status: "in-progress",
      reporter: "Project Manager",
      assignee: "Procurement Team",
      project: "Residential Tower A",
      createdAt: "2024-01-17",
      description: "Steel delivery delayed by 3 days due to supplier issues.",
    },
  ],

  inspections: [
    {
      id: 1,
      type: "Safety Audit",
      inspector: "John Safety",
      project: "Downtown Office Complex",
      date: "2024-01-18",
      status: "completed",
      score: 92,
      issues: 2,
      passed: true,
    },
    {
      id: 2,
      type: "Quality Check",
      inspector: "Mary Quality",
      project: "Residential Tower A",
      date: "2024-01-19",
      status: "scheduled",
      score: null,
      issues: 0,
      passed: null,
    },
  ],

  attendance: {
    today: {
      present: 42,
      absent: 3,
      late: 2,
      total: 47,
    },
    thisWeek: [
      { day: "Mon", present: 45, absent: 2 },
      { day: "Tue", present: 44, absent: 3 },
      { day: "Wed", present: 46, absent: 1 },
      { day: "Thu", present: 43, absent: 4 },
      { day: "Fri", present: 42, absent: 3 },
    ],
  },

  leaderboard: [
    {
      rank: 1,
      name: "Alex Rodriguez",
      xp: 3250,
      avatar: "/placeholder.svg?height=32&width=32",
      badge: "🏆",
    },
    {
      rank: 2,
      name: "Sarah Chen",
      xp: 3100,
      avatar: "/placeholder.svg?height=32&width=32",
      badge: "🥈",
    },
    {
      rank: 3,
      name: "Mike Johnson",
      xp: 2890,
      avatar: "/placeholder.svg?height=32&width=32",
      badge: "🥉",
    },
    {
      rank: 4,
      name: "John Smith",
      xp: 2450,
      avatar: "/placeholder.svg?height=32&width=32",
      badge: "",
    },
    {
      rank: 5,
      name: "Lisa Wang",
      xp: 2340,
      avatar: "/placeholder.svg?height=32&width=32",
      badge: "",
    },
  ],

  aiInsights: [
    {
      type: "risk",
      title: "Weather Risk Alert",
      description: "Heavy rain predicted for next week may delay outdoor work",
      severity: "medium",
      impact: "2-3 days delay",
      recommendation: "Reschedule outdoor tasks or prepare weather protection",
      confidence: 85,
    },
    {
      type: "optimization",
      title: "Resource Optimization",
      description:
        "Team efficiency can be improved by 15% with task reallocation",
      severity: "low",
      impact: "15% efficiency gain",
      recommendation: "Reassign 3 workers from Tower A to Office Complex",
      confidence: 92,
    },
    {
      type: "prediction",
      title: "Budget Forecast",
      description: "Current spending rate suggests 5% budget overrun",
      severity: "high",
      impact: "$125,000 overrun",
      recommendation: "Review and optimize material costs immediately",
      confidence: 78,
    },
  ],

  recentActivity: [
    {
      id: 1,
      user: "Mike Johnson",
      action: "completed task",
      target: "HVAC Installation - Floor 2",
      time: "2 hours ago",
      xp: 150,
    },
    {
      id: 2,
      user: "Sarah Wilson",
      action: "checked in",
      target: "Downtown Office Complex",
      time: "3 hours ago",
      xp: 10,
    },
    {
      id: 3,
      user: "David Chen",
      action: "earned badge",
      target: "Safety Champion",
      time: "5 hours ago",
      xp: 500,
    },
  ],
};

// Navigation Data
export const navigationData = {
  landing: [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ],

  dashboard: {
    main: [
      { name: "Dashboard", href: "/dashboard", icon: "BarChart3" },
      { name: "Projects", href: "/dashboard/projects", icon: "Building2" },
      { name: "Tasks", href: "/dashboard/tasks", icon: "CheckSquare" },
      { name: "Team", href: "/dashboard/team", icon: "Users" },
      { name: "Budget", href: "/dashboard/budget", icon: "DollarSign" },
    ],
    management: [
      { name: "Procurement", href: "/dashboard/procurement", icon: "Package" },
      { name: "Scheduling", href: "/dashboard/scheduling", icon: "Calendar" },
      { name: "Resources", href: "/dashboard/resources", icon: "Users" },
      {
        name: "Issues & Risks",
        href: "/dashboard/issues",
        icon: "AlertTriangle",
      },
      {
        name: "Inspections",
        href: "/dashboard/inspections",
        icon: "CheckSquare",
      },
    ],
    reports: [
      { name: "Daily Logs", href: "/dashboard/logs", icon: "FileText" },
      { name: "AI Insights", href: "/dashboard/ai", icon: "Brain" },
      { name: "Documents", href: "/dashboard/documents", icon: "FileBarChart" },
      { name: "Analytics", href: "/dashboard/analytics", icon: "TrendingUp" },
    ],
    tools: [
      {
        name: "Subcontractors",
        href: "/dashboard/subcontractors",
        icon: "Handshake",
      },
      { name: "Site Map", href: "/dashboard/sitemap", icon: "Map" },
      { name: "Compliance", href: "/dashboard/compliance", icon: "Shield" },
      { name: "Settings", href: "/dashboard/settings", icon: "Settings" },
    ],
  },
};

// Company/Brand Data
export const brandData = {
  name: "SiteSight",
  logo: {
    icon: "Building2",
    gradient: "from-orange-500 to-orange-600",
  },
  description:
    "Revolutionizing construction management through AI-powered insights, intelligent automation, and comprehensive project oversight. Build smarter, faster, and more efficiently.",
  social: ["Twitter", "LinkedIn", "Facebook", "Instagram"],
  footer: {
    product: ["Features", "Pricing", "Integrations", "API"],
    company: ["About", "Careers", "Contact", "Support"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
};
