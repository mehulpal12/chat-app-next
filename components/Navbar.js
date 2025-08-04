"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl">💬</span>
          <span className="text-2xl font-extrabold tracking-tight">ChatApp</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-cyan-400 transition-colors font-medium">Home</Link>
          <Link href="/chat" className="hover:text-cyan-400 transition-colors font-medium">Chat</Link>
          <Link href="/forums" className="hover:text-cyan-400 transition-colors font-medium">Forums</Link>
          {/* Add more links or buttons here */}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-4 pb-4">
          <Link
            href="/"
            className="block py-2 px-2 rounded hover:bg-cyan-900 hover:text-cyan-300 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/chat"
            className="block py-2 px-2 rounded hover:bg-cyan-900 hover:text-cyan-300 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Chat
          </Link>
          <Link
            href="/forums"
            className="block py-2 px-2 rounded hover:bg-cyan-900 hover:text-cyan-300 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Forums
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
