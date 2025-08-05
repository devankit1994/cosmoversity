"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Cosmoversity"
                width={120}
                height={120}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Admissions
            </Link>
            <Link
              href="/research"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/partnerships"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Partnerships
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Blogs
            </Link>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 cursor-pointer"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/admissions"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Admissions
              </Link>
              <Link
                href="/research"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Research
              </Link>
              <Link
                href="/partnerships"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Partnerships
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Blogs
              </Link>
              <Button asChild className="w-fit">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 cursor-pointer"
                >
                  Contact
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
