import Link from "next/link";
import { ModelType } from "@/app/generated/prisma";

type CompanyCardProps = {
  id: number;
  name: string;
  description: string;
  slug: string;
  approachSummary: string;
  modelType: ModelType;
  foundedYear?: number | null;
  totalFundingUsd?: number | null;
  tags?: { id: number; label: string }[];
};

const CompanyCard = ({
  id,
  name,
  description,
  slug,
  approachSummary,
  modelType,
  foundedYear,
  totalFundingUsd,
  tags = [],
}: CompanyCardProps) => {
  // Helper to format funding in a readable way
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

  return (
    <Link href={`/companies/${slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex-grow">
              {name}
            </h3>
            {foundedYear && (
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                Est. {foundedYear}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getModelTypeBadgeColor(
                modelType
              )}`}
            >
              {modelType}
            </span>

            {totalFundingUsd && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                {formatFunding(totalFundingUsd)}
              </span>
            )}

            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              >
                {tag.label}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                +{tags.length - 2} more
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
            {approachSummary}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
