"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { StartBuildingModal } from "@/components/modals/navbar-modals";

function MockDataCards() {
  const mockData = [
    {
      title: "Active Projects",
      value: "24",
      subtitle: "Across 8 cities",
      icon: Building2,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Team Members",
      value: "156",
      subtitle: "Online now",
      icon: Users,
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Efficiency Boost",
      value: "87%",
      subtitle: "vs traditional methods",
      icon: TrendingUp,
      color: "from-orange-600 to-orange-700",
    },
    {
      title: "Time Saved",
      value: "340",
      subtitle: "hours this month",
      icon: Clock,
      color: "from-orange-300 to-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {mockData.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div
                className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                <AnimatedCounter
                  end={Number.parseInt(item.value)}
                  suffix={item.value.includes("%") ? "%" : ""}
                />
              </div>
              <div className="text-sm font-semibold text-orange-600 mb-1">
                {item.title}
              </div>
              <div className="text-xs text-gray-600">{item.subtitle}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 !max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 mb-6 px-6 py-2 text-base">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionizing Construction Management
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Make Construction{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Fun and Interactive
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          From blueprint to building handover, we&apos;ve reimagined the entire
          process. Experience immersive 3D visualization and radical
          transparency that keeps every stakeholder connected in real-time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <StartBuildingModal />
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-orange-300 hover:border-orange-400 text-orange-600 hover:text-orange-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
          >
            Watch Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Mock Data Cards */}
        <MockDataCards />

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 text-base">
            Trusted by construction teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            {[
              "BuildTech",
              "Urban Dev",
              "Skyline Corp",
              "ConstructPro",
              "MegaBuild",
            ].map((company, index) => (
              <div
                key={company}
                className="text-lg font-bold text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
