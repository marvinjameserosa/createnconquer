"use client";

import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, Menu, X } from "lucide-react";
import { navigationData, brandData } from "@/lib/data";
import { LoginModal, GetStartedModal } from "@/components/modals/navbar-modals";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "testimonials", "pricing"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top, no section is active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div
              className={`w-8 h-8 bg-gradient-to-br ${brandData.logo.gradient} rounded-lg flex items-center justify-center`}
            >
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
              {brandData.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {navigationData.landing.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-gray-700 hover:text-orange-600 transition-colors font-medium whitespace-nowrap relative py-2 ${
                    isActive ? "text-orange-600" : ""
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <LoginModal />
            <GetStartedModal />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100">
          <ScrollArea className="h-[400px]">
            <div className="px-4 py-4 space-y-4 max-w-7xl mx-auto">
              {navigationData.landing.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(sectionId)}
                    className={`block w-full text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 ${
                      isActive ? "text-orange-600 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <div className="w-full">
                  <LoginModal />
                </div>
                <div className="w-full">
                  <GetStartedModal />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      )}
    </nav>
  );
}
