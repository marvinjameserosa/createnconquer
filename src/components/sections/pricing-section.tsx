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
import { Button } from "@/components/ui/button";
import { FloatingCard } from "@/components/ui/floating-card";
import { CheckCircle, Target, Award } from "lucide-react";
import { landingData } from "@/lib/data";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">
            <Target className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              perfect plan
            </span>{" "}
            for your team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your construction management with flexible pricing that grows
            with your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {landingData.pricing.map((plan, index) => (
            <FloatingCard key={plan.name} delay={index * 0.1}>
              <Card
                className={`h-full border-2 transition-all duration-300 relative overflow-hidden ${
                  plan.popular
                    ? "border-orange-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 text-sm font-semibold">
                    <Award className="w-4 h-4 inline mr-2" />
                    Most Popular
                  </div>
                )}

                <CardHeader
                  className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}
                >
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                        : "border-2 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </FloatingCard>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer tailored enterprise solutions with custom integrations,
              dedicated support, and specialized training for large-scale
              construction operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-orange-200 hover:border-orange-300 text-orange-600 bg-transparent"
              >
                View Enterprise Features
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
