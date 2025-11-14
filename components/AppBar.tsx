'use client';

import React from 'react';
import { Home, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Cart from './Cart';

const AppBar = () => {
  return (
    <nav className="w-full h-20 bg-black border-black flex flex-row items-center justify-between px-4 gap-x-6 fixed top-0 z-50">
      <Link
        href="/"
        className="flex gap-x-2 items-center text-blue-700 bg-slate-800/50 hover:bg-slate-800/80 p-2 rounded-md border-0 transition 200ms border-gray-300"
      >
        <Home
          height={18}
          width={18}
          className="text-gray-400"
        />
        <span className="text-white">Home</span>
      </Link>
      <Link
        href="/catalogue"
        className="text-md font-semibold text-white ml-auto"
      >
        Catalogue
      </Link>
      <Link
        href="/about"
        className="text-md font-semibold"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-md font-semibold"
      >
        Contact
      </Link>
      <Cart />
    </nav>
  );
};

export default AppBar;
