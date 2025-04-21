import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start md:order-2 space-x-6 mb-4 md:mb-0">
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
            >
              About
            </Link>
            <Link
              href="/data-sources"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
            >
              Data Sources
            </Link>
            <a
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
            >
              Contact
            </a>
          </div>

          <div className="mt-4 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Charted. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Data compiled from sources including Crunchbase, GitHub, Product
              Hunt, and other public sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
