"use client";
import Link from "next/link";
import LinksDropdown from "./LinksDropdown";

const Nav = () => {
  return (
    <nav className="bg-muted py-4 md:px-16 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <Link
          href="/shop"
          className="border-2 rounded-lg px-4 py-2 hover:bg-blue-200"
        >
          Back to Shop
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
