import { prisma } from "@/lib/prisma";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";
import ToolsFilters from "./ToolsFilters";

export const metadata = {
  title: "AI Tools - Charted",
  description:
    "Browse AI tools and solutions, filter by industry, open-source status, and more.",
};

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get filter params
  const isOpenSourceFilter = searchParams.isOpenSource
    ? searchParams.isOpenSource === "true"
    : undefined;
  const industryFilter = searchParams.industry
    ? Number(searchParams.industry)
    : undefined;

  // Construct the where clause based on filters
  const whereClause: any = {};

  if (isOpenSourceFilter !== undefined) {
    whereClause.isOpenSource = isOpenSourceFilter;
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

  // Get all tools
  const tools = await prisma.tool.findMany({
    where: whereClause,
    include: {
      company: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
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

  // Count open-source vs commercial tools for the filter UI
  const openSourceCount = await prisma.tool.count({
    where: { isOpenSource: true },
  });

  const commercialCount = await prisma.tool.count({
    where: { isOpenSource: false },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          AI Tools Directory
        </h1>
        <p className="max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Discover tools and solutions for various industries, from open-source
          libraries to commercial products.
        </p>
      </div>

      {/* Filters - Client Component */}
      <ToolsFilters
        industries={industries}
        industryFilter={industryFilter}
        isOpenSourceFilter={isOpenSourceFilter}
        openSourceCount={openSourceCount}
        commercialCount={commercialCount}
      />

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing {tools.length} {tools.length === 1 ? "tool" : "tools"}
          {isOpenSourceFilter !== undefined && (
            <> ({isOpenSourceFilter ? "open-source" : "commercial"})</>
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

      {/* Tools List */}
      {tools.length > 0 ? (
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
      ) : (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No tools found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try changing your filters or check back later as we add more tools.
          </p>
        </div>
      )}
    </div>
  );
}
