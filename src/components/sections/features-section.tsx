"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingCard } from "@/components/ui/floating-card";
import {
  Building2,
  Users,
  Calendar,
  BarChart3,
  Trophy,
  Brain,
  CheckCircle,
  Zap,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Package,
  FileText,
  Shield,
  Clock,
  Handshake,
  Map,
  FileBarChart,
} from "lucide-react";
import { landingData } from "@/lib/data";

const iconMap = {
  Building2,
  Users,
  Calendar,
  BarChart3,
  Trophy,
  Brain,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Zap,
  DollarSign,
  Package,
  FileText,
  Shield,
  Clock,
  Handshake,
  Map,
  FileBarChart,
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              revolutionize
            </span>{" "}
            construction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools transforms traditional construction
            management into an engaging, efficient, and intelligent experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingData.features.map((feature, index) => {
            const Icon =
              iconMap[feature.icon as keyof typeof iconMap] || Building2;

            return (
              <FloatingCard key={feature.title} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50/30 group gap-0">
                  <CardHeader className="pb-4 gap-0">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FloatingCard>
            );
          })}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl font-bold mb-6"
              >
                Experience the Future of Construction Management
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-orange-100 text-lg mb-8 leading-relaxed"
              >
                Our AI-powered platform doesn't just manage projects—it
                transforms how teams collaborate, compete, and succeed together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: CheckCircle, text: "Real-time Sync" },
                  { icon: Brain, text: "AI Predictions" },
                  { icon: Building2, text: "Smart Analytics" },
                  { icon: Trophy, text: "Team Rewards" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-center space-x-3 group"
                  >
                    <item.icon className="w-6 h-6 text-orange-200 group-hover:text-white transition-colors" />
                    <span className="font-semibold group-hover:text-orange-100 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Interactive Demo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-orange-100">Project Progress</span>
                    <span className="text-white font-bold">87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "87%" } : {}}
                      transition={{ duration: 2, delay: 1.5 }}
                      className="bg-white h-2 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { value: 24, label: "Active Tasks" },
                      { value: 156, label: "Team XP" },
                      { value: 98, label: "Efficiency" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                        className="text-center group hover:scale-105 transition-transform duration-200"
                      >
                        <div className="text-2xl font-bold group-hover:text-orange-200 transition-colors">
                          {stat.value}
                          {stat.label === "Efficiency" ? "%" : ""}
                        </div>
                        <div className="text-orange-200 text-sm">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
