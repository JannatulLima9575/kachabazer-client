"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-600">KachaBazer</h1>
      <nav className="space-x-6">
        <Link href="#home" className="hover:text-green-600">Home</Link>
        <Link href="#categories" className="hover:text-green-600">Categories</Link>
        <Link href="#prices" className="hover:text-green-600">Prices</Link>
        <Link href="#about" className="hover:text-green-600">About</Link>
      </nav>
    </header>
  );
}