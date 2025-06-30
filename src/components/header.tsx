import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="SiteSight Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10" 
          />
          <span className="font-bold text-xl">SiteSight</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-orange-500 transition-colors">Features</Link>
          <Link href="#solutions" className="text-sm font-medium hover:text-orange-500 transition-colors">Solutions</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">Testimonials</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-orange-500 transition-colors">Pricing</Link>
        </div>
        
        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline">Login</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-3">
            <Link 
              href="#features" 
              className="text-sm font-medium py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#solutions" 
              className="text-sm font-medium py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm font-medium py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm font-medium py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" size="sm">Login</Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;