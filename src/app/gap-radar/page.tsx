import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Industry } from "@/app/generated/prisma";

export const metadata = {
  title: "Gap Radar™ - Charted",
  description:
    "Identify industries and sectors with limited AI presence - perfect for spotting new opportunities and areas for innovation.",
};

// Define a type that includes the _count property
type IndustryWithCount = {
  id: number;
  name: string;
  slug: string;
  description: string;
  _count: {
    companies: number;
    tools: number;
  };
};

export default async function GapRadarPage() {
  // Get all industries with company counts
  const industries = (await prisma.industry.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      _count: {
        select: {
          companies: true,
          tools: true,
        },
      },
    },
    orderBy: {
      name: "asc", // Just order by name in the database query
    },
  })) as unknown as IndustryWithCount[];

  // Sort by company count in JavaScript after fetching
  const sortedIndustries = [...industries].sort((a, b) => {
    // First compare by company count (ascending)
    if (a._count.companies !== b._count.companies) {
      return a._count.companies - b._count.companies;
    }
    // If counts are equal, sort by name
    return a.name.localeCompare(b.name);
  });

  // Categorize industries by AI adoption level
  const gapThreshold = 3; // Less than 3 companies = significant gap
  const lowThreshold = 5; // Less than 5 companies = moderate gap

  const gapIndustries = sortedIndustries.filter(
    (i) => i._count.companies < gapThreshold
  );
  const lowAdoptionIndustries = sortedIndustries.filter(
    (i) =>
      i._count.companies >= gapThreshold && i._count.companies < lowThreshold
  );
  const highAdoptionIndustries = sortedIndustries.filter(
    (i) => i._count.companies >= lowThreshold
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Gap Radar™
        </h1>
        <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Identifying industries and sectors with limited AI presence - perfect
          for spotting new opportunities in artificial intelligence.
        </p>
      </div>

      {/* Overview Section */}
      <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          What is Gap Radar™?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Gap Radar™ analyzes our database to identify industries with
          relatively low AI presence compared to others. These "gaps" represent
          potential opportunities for innovation, where AI could create
          significant value but is currently underutilized.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Industries are categorized based on the number of AI companies
          operating in each sector, highlighting those that appear to be
          underserved by current AI solutions.
        </p>
      </div>

      {/* Significant Gaps Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-amber-100 dark:bg-amber-900/40 w-10 h-10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-amber-800 dark:text-amber-200"
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
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Significant Gaps
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          These industries show very limited AI adoption with fewer than{" "}
          {gapThreshold} AI companies identified. They represent significant
          opportunities for innovation.
        </p>

        {gapIndustries.length > 0 ? (
          <div className="space-y-6">
            {gapIndustries.map((industry) => (
              <div
                key={industry.id}
                className="border-l-4 border-amber-500 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10 rounded-r-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {industry.name}
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Only {industry._count.companies}{" "}
                        {industry._count.companies === 1
                          ? "company"
                          : "companies"}
                      </span>
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {industry.description.length > 200
                        ? `${industry.description.substring(0, 200)}...`
                        : industry.description}
                    </p>
                  </div>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
                  >
                    Explore Gap
                  </Link>
                </div>

                <div className="mt-4 text-sm text-amber-800 dark:text-amber-300">
                  <strong>Opportunity:</strong> This industry shows minimal AI
                  presence, suggesting significant untapped potential.
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              No significant gaps found at this time.
            </p>
          </div>
        )}
      </div>

      {/* Moderate Gaps Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/40 w-10 h-10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-800 dark:text-blue-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Moderate Gaps
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          These industries have some AI presence but are still relatively
          underserved with fewer than {lowThreshold} companies. There's room for
          growth and innovation.
        </p>

        {lowAdoptionIndustries.length > 0 ? (
          <div className="space-y-6">
            {lowAdoptionIndustries.map((industry) => (
              <div
                key={industry.id}
                className="border-l-4 border-blue-500 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {industry.name}
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {industry._count.companies} companies
                      </span>
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {industry.description.length > 180
                        ? `${industry.description.substring(0, 180)}...`
                        : industry.description}
                    </p>
                  </div>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              No moderate gaps found at this time.
            </p>
          </div>
        )}
      </div>

      {/* High Adoption Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 dark:bg-green-900/40 w-10 h-10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-800 dark:text-green-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            High AI Adoption
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          These industries already have significant AI presence with{" "}
          {lowThreshold}+ companies. While highly competitive, they may still
          offer niche opportunities.
        </p>

        {highAdoptionIndustries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highAdoptionIndustries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {industry.name}
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {industry._count.companies} companies
                      </span>
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              No industries with high AI adoption found at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
