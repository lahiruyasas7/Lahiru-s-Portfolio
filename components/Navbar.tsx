import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="cs_nav_list fw-medium flex justify-center items-center gap-4">
        <li className="menu-item-has-children">
          <Link href="/">Home</Link>
        </li>

        <li className="menu-item-has-children">
          <Link href="/blog">Projects</Link>
        </li>

        <li>
          <Link href="/pricing">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
