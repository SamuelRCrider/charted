import { prisma } from "@/lib/prisma";
import IndustryCard from "@/components/IndustryCard";

export default async function Home() {
  // Fetch industries with company counts
  const industries = await prisma.industry.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      _count: {
        select: { companies: true },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  // Format the industry data
  const formattedIndustries = industries.map((industry) => ({
    id: industry.id,
    name: industry.name,
    descriptionSummary:
      industry.description.substring(0, 150) +
      (industry.description.length > 150 ? "..." : ""),
    companyCount: industry._count.companies,
    // Consider an industry to have a gap if it has few companies
    isGap: industry._count.companies < 3,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
          Explore How AI is Transforming Every Industry
        </h1>
        <p className="max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Discover AI companies and tools by industry, identify gaps in AI
          innovation, and track the latest trends in artificial intelligence.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Browse by Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formattedIndustries.map((industry) => (
            <IndustryCard
              key={industry.id}
              id={industry.id}
              name={industry.name}
              descriptionSummary={industry.descriptionSummary}
              companyCount={industry.companyCount}
              isGap={industry.isGap}
            />
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-300">
            Gap Radar™
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Identify industries and subdomains with limited AI presence -
            perfect for spotting new opportunities.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-300">
            Trend Signals
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Track funding events, acquisitions, and emerging patterns in the AI
            ecosystem.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">
            Use Case Examples
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Explore real-world applications of AI with concrete examples from
            each industry.
          </p>
        </div>
      </div>
    </div>
  );
}
