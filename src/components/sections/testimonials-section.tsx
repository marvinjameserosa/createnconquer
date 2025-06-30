"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how construction teams worldwide are transforming their projects
            with SiteSight&apos;s innovative platform.
          </p>
        </motion.div>

        <TestimonialsCarousel />

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">
            Trusted by 500+ construction companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["BuildTech", "Urban Dev", "Skyline", "ConstructCorp"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-2xl font-bold text-gray-400"
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
