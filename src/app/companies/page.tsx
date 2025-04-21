import { prisma } from "@/lib/prisma";
import CompanyCard from "@/components/CompanyCard";
import { ModelType } from "@/app/generated/prisma";
import Link from "next/link";
import CompaniesFilters from "./CompaniesFilters";

export const metadata = {
  title: "Companies - Charted",
  description:
    "Browse all AI companies across various industries and explore their innovative approaches.",
};

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get filter params
  const modelTypeFilter = searchParams.modelType as ModelType | undefined;
  const industryFilter = searchParams.industry
    ? Number(searchParams.industry)
    : undefined;

  // Construct the where clause based on filters
  const whereClause: any = {};

  if (modelTypeFilter) {
    whereClause.modelType = modelTypeFilter;
  }

  if (industryFilter) {
    whereClause.industryId = industryFilter;
  }

  // Get all industries for the filter
  const industries = await prisma.industry.findMany({
    orderBy: {
      name: "asc",
    },
  });

  // Get all companies
  const companies = await prisma.company.findMany({
    where: whereClause,
    include: {
      industry: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      tags: {
        select: {
          id: true,
          label: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  // Get the unique model types
  const modelTypes = Object.values(ModelType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          AI Companies
        </h1>
        <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Explore AI-driven companies across various industries and their
          innovative approaches to problem-solving.
        </p>
      </div>

      {/* Filters - Client Component */}
      <CompaniesFilters
        industries={industries}
        modelTypes={modelTypes}
        industryFilter={industryFilter}
        modelTypeFilter={modelTypeFilter}
      />

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing {companies.length}{" "}
          {companies.length === 1 ? "company" : "companies"}
          {modelTypeFilter && (
            <>
              {" "}
              using <span className="font-semibold">
                {modelTypeFilter}
              </span>{" "}
              technology
            </>
          )}
          {industryFilter && (
            <>
              {" "}
              in{" "}
              <span className="font-semibold">
                {industries.find((i) => i.id === industryFilter)?.name}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Companies List */}
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
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No companies found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try changing your filters or check back later as we add more
            companies.
          </p>
        </div>
      )}
    </div>
  );
}
