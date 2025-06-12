"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const MENU_ITEMS = ["Jewelry", "Ring", "Necklace", "Gift", "Wedding", "Explore"];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger (mobile) & Logo (lg+) */}
          <div className="flex items-center flex-1 lg:hidden">
            {/* Hamburger for mobile */}
            <button
              className="mr-2 text-black"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
          <div className="flex lg:mr-8">
            <Image
              src="/Medologo.png"
              alt="MedoTheJewelly Logo"
              width={150}
              height={40}
            />
          </div>
          {/* Center: Menu (lg+) */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            {MENU_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black font-medium hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Searchbox, Shopping Bag & Account */}
          <div className="flex items-center flex-1 justify-end space-x-4">
            {/* Searchbox */}
            <div className="hidden lg:flex items-center border border-gray-300 rounded px-2 py-1">
              <FiSearch className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-black placeholder-gray-500 w-32"
              />
            </div>
            {/* Shopping Bag Icon */}
            <button className="text-black" aria-label="Shopping Bag">
              <FiShoppingBag size={24} />
            </button>
            {/* Account Button */}
            <button className="text-black" aria-label="Account">
              <FiUser size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/Medologo.png"
                alt="MedoTheJewelly Logo"
                width={150}
                height={40}
              />
              <button
                className="text-black"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black text-lg font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            {/* Searchbox (mobile) */}
            <div className="flex items-center border border-gray-300 rounded px-2 py-1 mt-8">
              <FiSearch className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-black placeholder-gray-500 w-full"
              />
            </div>
            {/* Shopping Bag Icon (mobile) */}
            <button
              className="text-black mt-6 flex items-center"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag size={24} className="mr-2" />
              <span>Bag</span>
            </button>
            {/* Account Button (mobile) */}
            <button
              className="text-black mt-4 flex items-center"
              aria-label="Account"
            >
              <FiUser size={24} className="mr-2" />
              <span>Account</span>
            </button>
          </div>
          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </nav>
  );
}
