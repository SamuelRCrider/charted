import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: "Industries - Charted",
  description:
    "Browse all industries and see how AI is transforming each sector.",
};

export default async function IndustriesPage() {
  // Fetch industries with company counts
  const industries = await prisma.industry.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      _count: {
        select: {
          companies: true,
          tools: true,
          useCases: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Industries Using AI
        </h1>
        <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Explore how artificial intelligence is being applied across different
          sectors, from healthcare to entertainment and beyond.
        </p>
      </div>

      {/* Industries List */}
      <div className="space-y-8 mt-8">
        {industries.map((industry) => {
          // Determine if this is a gap industry (few AI companies)
          const isGapIndustry = industry._count.companies < 3;

          return (
            <div
              key={industry.id}
              className={`
                border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow
                ${
                  isGapIndustry
                    ? "border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800"
                    : "border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700"
                }
              `}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {industry.name}
                      {isGapIndustry && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                          Gap Radar™
                        </span>
                      )}
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg
                          className="mr-1.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {industry._count.companies}{" "}
                        {industry._count.companies === 1
                          ? "company"
                          : "companies"}
                      </span>

                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg
                          className="mr-1.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {industry._count.tools}{" "}
                        {industry._count.tools === 1 ? "tool" : "tools"}
                      </span>

                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg
                          className="mr-1.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        {industry._count.useCases} use cases
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                  >
                    Explore
                  </Link>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {industry.description}
                </p>

                {isGapIndustry && (
                  <div className="mt-4 bg-amber-100 dark:bg-amber-900/30 rounded p-4 text-sm text-amber-800 dark:text-amber-200">
                    <strong>Gap Alert:</strong> AI adoption in this industry is
                    still emerging, presenting potential opportunities for
                    innovation and new AI applications.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
