import Link from "next/link";

type UseCaseCardProps = {
  id: number;
  title: string;
  description: string;
  exampleCompanyId?: number | null;
  exampleCompanyName?: string | null;
};

const UseCaseCard = ({
  id,
  title,
  description,
  exampleCompanyId,
  exampleCompanyName,
}: UseCaseCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        {exampleCompanyName && exampleCompanyId && (
          <div className="mt-auto pt-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
            <span>Example: </span>
            <Link
              href={`/companies/${exampleCompanyId}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {exampleCompanyName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCaseCard;
