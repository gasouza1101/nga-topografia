"use client";

/**
 * Componente Sidebar
 * Menu lateral com logo
 */
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-24 bg-white border-r border-gray-200 flex flex-col items-center justify-start pt-8 z-40">
      {/* Logo */}
      <a
        href="#"
        className="hover:opacity-80 transition-opacity"
        aria-label="NGA Topografia - Home"
      >
        <img
          src="/images/LOGO%20nga.png"
          alt="NGA Topografia"
          className="h-4 w-auto"
        />
      </a>
    </aside>
  );
}
