"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/LOGO%20nga.png"
            alt="NGA Topografia"
            className="h-12 md:h-14 w-auto object-contain p-1"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-primary transition-colors font-medium text-sm relative group"
            >
              {link.label}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 py-4 gap-2 bg-white">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-primary hover:bg-gray-100 px-4 py-2 rounded-lg transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}