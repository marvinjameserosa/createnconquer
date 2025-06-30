"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { landingData } from "@/lib/data";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = landingData.testimonials;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Quote icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 lg:mb-0">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Stars */}
                    <div className="flex justify-center lg:justify-start items-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-orange-400 fill-current"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                      <Avatar className="w-16 h-16 border-4 border-orange-200">
                        <AvatarImage
                          src={
                            testimonials[currentIndex].avatar ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-lg font-bold">
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="text-center lg:text-left">
                        <div className="font-bold text-xl text-gray-900 mb-1">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600 mb-1">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-orange-600 font-semibold mb-3">
                          {testimonials[currentIndex].company}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                          Project: {testimonials[currentIndex].projectType}
                        </div>
                        <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {testimonials[currentIndex].stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6">
        <Button
          onClick={prevTestimonial}
          size="icon"
          className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-6">
        <Button
          onClick={nextTestimonial}
          size="icon"
          className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-orange-500 to-orange-600 scale-125"
                : "bg-orange-200 hover:bg-orange-300"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-full bg-orange-100 rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      {/* Auto-play control */}
      <div className="text-center mt-4">
        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          variant="ghost"
          size="sm"
          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
        >
          {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
        </Button>
      </div>
    </div>
  );
}
