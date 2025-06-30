"use client";

import { Building2 } from "lucide-react";
import { brandData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div
                className={`w-8 h-8 bg-gradient-to-br ${brandData.logo.gradient} rounded-lg flex items-center justify-center`}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{brandData.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {brandData.description}
            </p>
            <div className="flex space-x-4">
              {brandData.social.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              {brandData.footer.product.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {brandData.footer.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {brandData.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {brandData.footer.legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
