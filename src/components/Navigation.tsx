"use client";

import { BrainCircuit } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <BrainCircuit className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Charted
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link
              href="/industries"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Industries
            </Link>
            <Link
              href="/companies"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Companies
            </Link>
            <Link
              href="/tools"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Tools
            </Link>
            <Link
              href="/trends"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Trends
            </Link>
            <Link
              href="/gap-radar"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              Gap Radar™
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/industries"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
          >
            Industries
          </Link>
          <Link
            href="/companies"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
          >
            Companies
          </Link>
          <Link
            href="/tools"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
          >
            Tools
          </Link>
          <Link
            href="/trends"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
          >
            Trends
          </Link>
          <Link
            href="/gap-radar"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
          >
            Gap Radar™
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
