import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Trend Signals - Charted",
  description:
    "Track funding events, acquisitions, and emerging patterns in the AI ecosystem.",
};

// Define types for our events
type FundingEvent = {
  id: number;
  type: "funding";
  date: Date;
  company: {
    id: number;
    name: string;
    slug: string;
    industry: {
      id: number;
      name: string;
      slug: string;
    };
  };
  roundType: string;
  amountUsd: number;
  leadInvestor: string | null;
};

type AcquisitionEvent = {
  id: number;
  type: "acquisition";
  date: Date;
  acquiredCompany: {
    id: number;
    name: string;
    slug: string;
    industry: {
      id: number;
      name: string;
      slug: string;
    };
  };
  acquiringCompany: {
    id: number;
    name: string;
    slug: string;
  };
  amountUsd: number | null;
};

type Event = FundingEvent | AcquisitionEvent;

export default async function TrendsPage() {
  // Fetch funding rounds
  const fundingRounds = await prisma.fundingRound.findMany({
    select: {
      id: true,
      date: true,
      roundType: true,
      amountUsd: true,
      leadInvestor: true,
      company: {
        select: {
          id: true,
          name: true,
          slug: true,
          industry: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      },
    },
    orderBy: {
      date: "desc",
    },
    take: 10, // Limit to 10 most recent
  });

  // Format funding rounds as events
  const fundingEvents: FundingEvent[] = fundingRounds.map((round) => ({
    id: round.id,
    type: "funding",
    date: round.date,
    company: round.company,
    roundType: round.roundType,
    amountUsd: round.amountUsd,
    leadInvestor: round.leadInvestor,
  }));

  // Fetch acquisitions
  const acquisitions = await prisma.acquisition.findMany({
    select: {
      id: true,
      date: true,
      amountUsd: true,
      acquiredCompany: {
        select: {
          id: true,
          name: true,
          slug: true,
          industry: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      },
      acquiringCompany: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
    take: 10, // Limit to 10 most recent
  });

  // Format acquisitions as events
  const acquisitionEvents: AcquisitionEvent[] = acquisitions.map((acq) => ({
    id: acq.id,
    type: "acquisition",
    date: acq.date,
    acquiredCompany: acq.acquiredCompany,
    acquiringCompany: acq.acquiringCompany,
    amountUsd: acq.amountUsd,
  }));

  // Combine and sort all events
  const allEvents: Event[] = [...fundingEvents, ...acquisitionEvents].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  // Get industry totals for funding (for trends section)
  const industryFunding = await prisma.industry.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      companies: {
        select: {
          fundingRounds: {
            select: {
              amountUsd: true,
              date: true,
            },
          },
        },
      },
    },
  });

  // Calculate total funding per industry, including only recent rounds (last year)
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const industryTotals = industryFunding.map((industry) => {
    // Get all funding rounds across all companies in this industry
    const allRounds = industry.companies.flatMap(
      (company) => company.fundingRounds
    );

    // Calculate total funding
    const totalFunding = allRounds.reduce(
      (sum, round) => sum + round.amountUsd,
      0
    );

    // Calculate recent funding (last 12 months)
    const recentRounds = allRounds.filter((round) => round.date >= oneYearAgo);
    const recentFunding = recentRounds.reduce(
      (sum, round) => sum + round.amountUsd,
      0
    );

    return {
      id: industry.id,
      name: industry.name,
      slug: industry.slug,
      totalFunding,
      recentFunding,
      roundCount: allRounds.length,
      recentRoundCount: recentRounds.length,
    };
  });

  // Sort by recent funding (to show trending industries)
  const trendingIndustries = [...industryTotals]
    .filter((industry) => industry.recentFunding > 0)
    .sort((a, b) => b.recentFunding - a.recentFunding)
    .slice(0, 5); // Top 5 industries by recent funding

  // Format currency
  const formatFunding = (amount: number | null) => {
    if (!amount) return null;

    if (amount >= 1_000_000_000) {
      return `$${(amount / 1_000_000_000).toFixed(1)}B`;
    } else if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(1)}M`;
    } else if (amount >= 1_000) {
      return `$${(amount / 1_000).toFixed(1)}K`;
    }
    return `$${amount}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Trend Signals
        </h1>
        <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Track funding events, acquisitions, and emerging patterns in the AI
          ecosystem.
        </p>
      </div>

      {/* Main content - 2 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400"
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
              Recent Activity Timeline
            </h2>

            {allEvents.length > 0 ? (
              <div className="space-y-6">
                {allEvents.map((event) => (
                  <div
                    key={`${event.type}-${event.id}`}
                    className="border-l-2 border-blue-500 pl-4 py-2"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {formatDistanceToNow(event.date, { addSuffix: true })} ·{" "}
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>

                    {event.type === "funding" ? (
                      <div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs px-2 py-1 rounded mr-2">
                            Funding
                          </span>
                          <Link
                            href={`/companies/${event.company.slug}`}
                            className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {event.company.name}
                          </Link>
                          <span className="text-gray-600 dark:text-gray-300 mx-2">
                            raised
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {formatFunding(event.amountUsd)}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {event.roundType}
                          {event.leadInvestor
                            ? ` led by ${event.leadInvestor}`
                            : ""}
                          <span className="text-gray-500 dark:text-gray-400 ml-2">
                            ·
                          </span>
                          <Link
                            href={`/industries/${event.company.industry.slug}`}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                          >
                            {event.company.industry.name}
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs px-2 py-1 rounded mr-2">
                            Acquisition
                          </span>
                          <Link
                            href={`/companies/${event.acquiringCompany.slug}`}
                            className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {event.acquiringCompany.name}
                          </Link>
                          <span className="text-gray-600 dark:text-gray-300 mx-2">
                            acquired
                          </span>
                          <Link
                            href={`/companies/${event.acquiredCompany.slug}`}
                            className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {event.acquiredCompany.name}
                          </Link>
                        </div>
                        {event.amountUsd && (
                          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Deal size: {formatFunding(event.amountUsd)}
                            <span className="text-gray-500 dark:text-gray-400 ml-2">
                              ·
                            </span>
                            <Link
                              href={`/industries/${event.acquiredCompany.industry.slug}`}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                            >
                              {event.acquiredCompany.industry.name}
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  No recent events found.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Trending industries sidebar */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-red-600 dark:text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              Trending Industries
            </h2>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Industries with the most funding activity in the last 12 months.
            </p>

            {trendingIndustries.length > 0 ? (
              <div className="space-y-4">
                {trendingIndustries.map((industry) => (
                  <div
                    key={industry.id}
                    className="border-l-2 border-red-500 dark:border-red-700 pl-3 py-2"
                  >
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block mb-1"
                    >
                      {industry.name}
                    </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {formatFunding(industry.recentFunding)} raised in last 12
                      months
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {industry.recentRoundCount} recent funding{" "}
                      {industry.recentRoundCount === 1 ? "round" : "rounds"}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No trending industries found.
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              AI Investment Stats
            </h2>

            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {formatFunding(
                    industryTotals.reduce(
                      (sum, industry) => sum + industry.totalFunding,
                      0
                    )
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total funding tracked
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatFunding(
                    industryTotals.reduce(
                      (sum, industry) => sum + industry.recentFunding,
                      0
                    )
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Funding in last 12 months
                </div>
              </div>

              <div>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  {industryTotals.reduce(
                    (sum, industry) => sum + industry.roundCount,
                    0
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total funding rounds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
