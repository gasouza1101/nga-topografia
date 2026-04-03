"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

/**
 * Componente Navbar
 * Navegação principal com menu responsivo
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm transition-all duration-300"
      aria-label="Navegação principal"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-xl text-gray-800 hover:text-primary transition-colors"
          aria-label="NGA Topografia - Home"
        >
          NGA Topografia
        </a>

        {/* Menu Desktop */}
        <div
          className="hidden md:flex space-x-8"
          role="menubar"
        >
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-primary transition-colors font-medium text-sm"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Button Menu Mobile */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Menu Mobile */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden"
            role="menu"
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-primary hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}