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
    <nav className="fixed top-0 w-full backdrop-blur bg-white/80 border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/LOGO%20nga.png"
            alt="NGA Topografia"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-green-900 transition-colors font-medium text-sm relative group"
            >
              {link.label}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-900 transition-all group-hover:w-full"></span>
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
          isOpen ? "max-h-96 border-t" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 py-4 gap-2 bg-white">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}