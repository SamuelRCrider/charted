import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import { ModelType } from "@/app/generated/prisma";

type Props = {
  params: { slug: string };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = await prisma.company.findUnique({
    where: { slug: params.slug },
    include: {
      industry: true,
    },
  });

  if (!company) {
    return {
      title: "Company Not Found",
    };
  }

  return {
    title: `${company.name} - Charted`,
    description: company.description.slice(0, 160),
  };
}

export default async function CompanyPage({ params }: Props) {
  const company = await prisma.company.findUnique({
    where: { slug: params.slug },
    include: {
      industry: true,
      tools: {
        include: {
          tags: true,
        },
      },
      tags: true,
      fundingRounds: {
        orderBy: {
          date: "desc",
        },
      },
    },
  });

  if (!company) {
    notFound();
  }

  // Check if company has been acquired
  const acquisitionData = await prisma.acquisition.findUnique({
    where: {
      acquiredCompanyId: company.id,
    },
    include: {
      acquiringCompany: true,
    },
  });

  // Format funding in a readable way
  const formatFunding = (amount?: number | null) => {
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

  // Model type badge color
  const getModelTypeBadgeColor = (type: ModelType) => {
    const colors = {
      LLM: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      CV: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      RL: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      ClassicalML:
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      MultiModal:
        "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      Other: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    };

    return colors[type] || colors.Other;
  };

  const totalFunding = company.fundingRounds.reduce(
    (sum, round) => sum + round.amountUsd,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Company Header */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            {/* Acquisition banner if company was acquired */}
            {acquisitionData && (
              <div className="mb-4 bg-blue-50 dark:bg-blue-900/10 text-blue-800 dark:text-blue-300 py-2 px-4 rounded-md text-sm inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
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
                Acquired by{" "}
                <Link
                  href={`/companies/${acquisitionData.acquiringCompany.slug}`}
                  className="font-medium ml-1 hover:underline"
                >
                  {acquisitionData.acquiringCompany.name}
                </Link>{" "}
                in {new Date(acquisitionData.date).getFullYear()}
                {acquisitionData.amountUsd &&
                  ` for ${formatFunding(acquisitionData.amountUsd)}`}
              </div>
            )}

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-2">
              {company.name}
            </h1>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getModelTypeBadgeColor(
                  company.modelType
                )}`}
              >
                {company.modelType}
              </span>

              {company.foundedYear && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Founded {company.foundedYear}
                </span>
              )}

              {totalFunding > 0 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  {formatFunding(totalFunding)} raised
                </span>
              )}

              {company.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-0 space-y-3">
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 w-full md:w-auto justify-center"
            >
              Visit Website
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <Link
              href={`/industries/${company.industry.slug}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 w-full md:w-auto justify-center"
            >
              Browse {company.industry.name} Industry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Main company info */}
        <div className="md:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {company.description}
            </p>
          </div>

          {/* Approach */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              AI Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {company.approachSummary}
            </p>
          </div>

          {/* Tools Section - if any */}
          {company.tools.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Tools & Products
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {company.tools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    id={tool.id}
                    name={tool.name}
                    description={tool.description}
                    websiteUrl={tool.websiteUrl}
                    isOpenSource={tool.isOpenSource}
                    useCase={tool.useCase}
                    companyId={company.id}
                    companyName={company.name}
                    tags={tool.tags}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column - Sidebar with additional info */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              At a Glance
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Industry
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  <Link
                    href={`/industries/${company.industry.slug}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {company.industry.name}
                  </Link>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Founded
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  {company.foundedYear || "Unknown"}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Model Type
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  {company.modelType}
                </dd>
              </div>

              {totalFunding > 0 && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Total Funding
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                    {formatFunding(totalFunding)}
                  </dd>
                </div>
              )}

              {company.websiteUrl && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Website
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white truncate">
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {company.websiteUrl.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Funding Timeline */}
          {company.fundingRounds.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Funding History
              </h2>

              <div className="space-y-4">
                {company.fundingRounds.map((round) => (
                  <div
                    key={round.id}
                    className="border-l-2 border-blue-500 dark:border-blue-700 pl-4 py-1"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {round.roundType}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(round.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {formatFunding(round.amountUsd)}
                      </p>
                    </div>
                    {round.leadInvestor && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Lead: {round.leadInvestor}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
