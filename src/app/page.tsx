'use client';
import Header from "@/components/header";
import Hero from "@/components/hero";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9] dark:bg-[#111]">
      <Header />
      <Hero />
      <Features/>
      <CTA />
      <Footer />
    </div>
  );
}