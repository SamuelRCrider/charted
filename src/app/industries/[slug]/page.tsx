import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import CompanyCard from "@/components/CompanyCard";
import ToolCard from "@/components/ToolCard";
import UseCaseCard from "@/components/UseCaseCard";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = await prisma.industry.findUnique({
    where: { slug: params.slug },
  });

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `AI in ${industry.name} - Charted`,
    description: `Explore AI companies, tools, and use cases in the ${industry.name} industry.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const industry = await prisma.industry.findUnique({
    where: { slug: params.slug },
    include: {
      _count: {
        select: { companies: true, tools: true },
      },
    },
  });

  if (!industry) {
    notFound();
  }

  // Get companies in this industry
  const companies = await prisma.company.findMany({
    where: { industryId: industry.id },
    include: {
      tags: {
        select: {
          id: true,
          label: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  // Get tools in this industry
  const tools = await prisma.tool.findMany({
    where: { industryId: industry.id },
    include: {
      company: {
        select: {
          id: true,
          name: true,
        },
      },
      tags: {
        select: {
          id: true,
          label: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  // Get use cases for this industry
  const useCases = await prisma.useCaseCard.findMany({
    where: { industryId: industry.id },
    include: {
      exampleCompany: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // Check if this is a "gap" industry (few companies)
  const isGapIndustry = industry._count.companies < 3;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Industry Header */}
      <div className="pb-6 mb-10 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-1">
              AI in {industry.name}
              {isGapIndustry && (
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  Gap Radar™
                </span>
              )}
            </h1>

            <div className="flex flex-wrap gap-4 mt-3">
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
                {industry._count.companies === 1 ? "company" : "companies"}
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
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/industries"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              ← All Industries
            </Link>

            <Link
              href="/gap-radar"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              View Gap Radar™
            </Link>
          </div>
        </div>

        {/* Industry description */}
        <div className="mt-6 max-w-4xl">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {industry.description}
          </p>
        </div>
      </div>

      {/* Gap Alert - if applicable */}
      {isGapIndustry && (
        <div className="mb-10 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Gap Alert: Opportunity for Innovation
          </h2>
          <p className="text-amber-700 dark:text-amber-300">
            This industry currently has limited AI presence with only{" "}
            {industry._count.companies}{" "}
            {industry._count.companies === 1 ? "company" : "companies"} in our
            database. This suggests potential opportunities for new AI
            applications and solutions in this sector.
          </p>
        </div>
      )}

      {/* Companies Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
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
          Companies in {industry.name}
        </h2>

        {companies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                name={company.name}
                description={company.description}
                slug={company.slug}
                approachSummary={company.approachSummary}
                modelType={company.modelType}
                foundedYear={company.foundedYear}
                totalFundingUsd={company.totalFundingUsd}
                tags={company.tags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              No companies found in this industry yet.
            </p>
          </div>
        )}
      </div>

      {/* Tools Section */}
      {tools.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
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
            Tools in {industry.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                id={tool.id}
                name={tool.name}
                description={tool.description}
                websiteUrl={tool.websiteUrl}
                isOpenSource={tool.isOpenSource}
                useCase={tool.useCase}
                companyId={tool.company?.id}
                companyName={tool.company?.name}
                tags={tool.tags}
              />
            ))}
          </div>
        </div>
      )}

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
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
            Real-world Examples in {industry.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                id={useCase.id}
                title={useCase.title}
                description={useCase.description}
                exampleCompanyId={useCase.exampleCompany?.id}
                exampleCompanyName={useCase.exampleCompany?.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
