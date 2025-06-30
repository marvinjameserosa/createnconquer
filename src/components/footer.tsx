import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="SiteSight Logo" 
                width={32} 
                height={32}
                className="h-8 w-8" 
              />
              <span className="font-bold text-lg">SiteSight</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              Making construction management interactive, transparent, and enjoyable from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="#features" className="hover:text-orange-500">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-orange-500">Pricing</Link></li>
                <li><Link href="#integrations" className="hover:text-orange-500">Integrations</Link></li>
                <li><Link href="#roadmap" className="hover:text-orange-500">Roadmap</Link></li>
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="#" className="hover:text-orange-500">About Us</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Careers</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Blog</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <h3 className="font-medium">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="#" className="hover:text-orange-500">Documentation</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Guides</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Support</Link></li>
                <li><Link href="#" className="hover:text-orange-500">API</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} SiteSight. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400">Terms</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400">Privacy</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;