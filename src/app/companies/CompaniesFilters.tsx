"use client";

import Link from "next/link";
import { ModelType } from "@/app/generated/prisma";

type Industry = {
  id: number;
  name: string;
};

type CompaniesFiltersProps = {
  industries: Industry[];
  modelTypes: string[];
  industryFilter?: number;
  modelTypeFilter?: string;
};

export default function CompaniesFilters({
  industries,
  modelTypes,
  industryFilter,
  modelTypeFilter,
}: CompaniesFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Industry Filter */}
        <div>
          <label
            htmlFor="industry-filter"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Industry
          </label>
          <select
            id="industry-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={industryFilter ?? ""}
            onChange={(e) => {
              const url = new URL(window.location.href);
              if (e.target.value) {
                url.searchParams.set("industry", e.target.value);
              } else {
                url.searchParams.delete("industry");
              }
              window.location.href = url.toString();
            }}
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry.id} value={industry.id}>
                {industry.name}
              </option>
            ))}
          </select>
        </div>

        {/* Model Type Filter */}
        <div>
          <label
            htmlFor="model-type-filter"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            AI Model Type
          </label>
          <select
            id="model-type-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={modelTypeFilter ?? ""}
            onChange={(e) => {
              const url = new URL(window.location.href);
              if (e.target.value) {
                url.searchParams.set("modelType", e.target.value);
              } else {
                url.searchParams.delete("modelType");
              }
              window.location.href = url.toString();
            }}
          >
            <option value="">All Model Types</option>
            {modelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset filters */}
      {(modelTypeFilter || industryFilter) && (
        <div className="mt-4 text-right">
          <Link
            href="/companies"
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition ease-in-out duration-150"
          >
            Reset Filters
          </Link>
        </div>
      )}
    </div>
  );
}
