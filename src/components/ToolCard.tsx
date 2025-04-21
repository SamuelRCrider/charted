import Link from "next/link";

type ToolCardProps = {
  id: number;
  name: string;
  description: string;
  websiteUrl: string;
  isOpenSource: boolean;
  useCase: string;
  companyId?: number | null;
  companyName?: string | null;
  tags?: { id: number; label: string }[];
};

const ToolCard = ({
  id,
  name,
  description,
  websiteUrl,
  isOpenSource,
  useCase,
  companyId,
  companyName,
  tags = [],
}: ToolCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {name}
          </h3>
          <span
            className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isOpenSource
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            }`}
          >
            {isOpenSource ? "Open Source" : "Commercial"}
          </span>
        </div>

        {companyName && companyId && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            by{" "}
            <Link
              href={`/companies/${companyId}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {companyName}
            </Link>
          </div>
        )}

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            {useCase}
          </span>

          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            Visit website
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
