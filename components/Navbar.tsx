import Link from "next/link";
import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black-100/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <ul className="flex justify-center items-center gap-8 py-4 text-white text-lg flex-wrap">
          <li className="relative group">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="relative group">
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li className="relative group">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="relative group">
            <Link href="/resume" className="nav-link">
              Resume
            </Link>
          </li>

          <li className="relative group">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>

          <li className="relative group">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
