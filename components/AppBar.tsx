'use client';
import { Home } from 'lucide-react';
import Link from 'next/link';
import Cart from './Cart';

const linkClass =
  'text-md font-regular text-white p-2 rounded-md hover:bg-slate-700/30 active:bg-slate-700 transition duration-200';

const AppBar = () => {
  return (
    <nav className="w-full h-20 bg-slate-900 border-black flex flex-row items-center justify-between px-4 gap-x-6 sm:gap-x-8 fixed top-0 z-50">
      <Link
        href="/"
        className={`${linkClass} flex gap-x-2 items-center`}
      >
        <Home
          height={18}
          width={18}
          className="text-gray-400"
        />
        <span className="text-white">Home</span>
      </Link>
      <div className="ml-auto" />
      <Link
        href="/catalogue"
        className={linkClass}
      >
        Catalogue
      </Link>
      <Link
        href="/about"
        className={linkClass}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className={linkClass}
      >
        Contact
      </Link>
      <Cart />
    </nav>
  );
};

export default AppBar;
