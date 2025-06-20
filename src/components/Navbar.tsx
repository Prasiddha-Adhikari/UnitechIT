"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "All Courses", dropdown: true },
    { name: "Success Story", href: "/success-story" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Blog", href: "/blog" },
  ];

  const allCoursesDropdown = [
    { name: "Web Development", href: "/courses/web-development" },
    { name: "Data Science", href: "/courses/data-science" },
    { name: "Design", href: "/courses/design" },
    { name: "Marketing", href: "/courses/marketing" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setDropdownClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (!dropdownClicked) setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!dropdownClicked) setDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setDropdownClicked((prev) => !prev);
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Unitech IT Logo"
            width={40}
            height={40}
            priority
            unoptimized
          />
          <span className="text-xl font-bold text-blue-500">Unitech IT Solution</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) =>
            item.dropdown ? (
              <div
                key={i}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 text-gray-700 transition ${
                    dropdownOpen ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                  }`}
                  onClick={handleDropdownClick}
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-orange-600" : "rotate-0"
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {allCoursesDropdown.map(({ name, href }, idx) => (
                      <Link
                        key={idx}
                        href={href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                href={item.href!}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                {item.name}
              </Link>
            )
          )}

          <Link
            href="/inquiry"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Inquiry
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 border-t pt-4 px-6">
          {/* All Courses with dropdown toggle */}
          <div>
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              All Courses
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-orange-600" : "rotate-0"
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="flex flex-col pl-5 mt-2 space-y-1">
                {allCoursesDropdown.map(({ name, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other nav items */}
          {navItems
            .filter((item) => !item.dropdown)
            .map((item, i) => (
              <Link
                key={i}
                href={item.href!}
                className="block mt-3 text-gray-700 hover:text-orange-500 transition"
              >
                {item.name}
              </Link>
            ))}

          <Link
            href="/inquiry"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition w-full text-left"
          >
            Inquiry
          </Link>
        </div>
      )}
    </nav>
  );
}
