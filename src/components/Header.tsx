"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "IE3 & IE4 Premium Motors", href: "/products/ie3-ie4-motors" },
      { label: "VFD-Compatible Motors", href: "/products/vfd-compatible" },
      { label: "Textile Brake Motors", href: "/products/brake-motors" },
    ],
  },
  {
    label: "Applications",
    href: "#",
    submenu: [
      { label: "Ring Twisters", href: "/applications/ring-twisters" },
      { label: "Winding Machines", href: "/applications/winding-machines" },
      { label: "Spinning & TFO", href: "/applications/spinning-tfo" },
    ],
  },
  { label: "Engineering", href: "/engineering" },
  { label: "Quality Lab", href: "/quality-lab" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative block h-12 w-48">
          <Image 
            src="/images/emo-logo-red.png" 
            alt="EMO Motors" 
            fill 
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveSubmenu(item.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href={item.href}
                className="text-text hover:text-accent font-medium transition-colors py-2"
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Submenu */}
              {item.submenu && activeSubmenu === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-text hover:text-accent hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="hidden lg:inline-flex btn-primary">
          Request Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="block text-text hover:text-accent font-medium py-2"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 border-l-2 border-border">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-muted hover:text-accent py-2 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary w-full justify-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
