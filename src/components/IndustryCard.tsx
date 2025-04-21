import Link from "next/link";

type IndustryCardProps = {
  id: number;
  name: string;
  descriptionSummary: string;
  companyCount: number;
  isGap?: boolean;
};

const IndustryCard = ({
  id,
  name,
  descriptionSummary,
  companyCount,
  isGap = false,
}: IndustryCardProps) => {
  // Determine if this industry has few AI companies (gap)
  const gapThreshold = 3; // Consider it a gap if less than 3 companies
  const isGapIndustry = isGap || companyCount < gapThreshold;

  return (
    <Link href={`/industries/${id}`} className="block">
      <div
        className={`
        rounded-lg shadow-md p-6 h-full transition-all duration-200 ease-in-out
        hover:shadow-lg hover:scale-[1.02] transform
        ${
          isGapIndustry
            ? "bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800"
            : "bg-white dark:bg-gray-800"
        }
      `}
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {name}
          {isGapIndustry && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Gap Radar™
            </span>
          )}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {descriptionSummary}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {companyCount} {companyCount === 1 ? "company" : "companies"}
          </span>

          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default IndustryCard;
