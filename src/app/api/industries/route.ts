import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define a type for the response data, including the company count
type IndustryData = {
  id: string; // Or number, depending on your schema
  name: string;
  descriptionSummary: string | null;
  companyCount: number;
};

// Define the type for the raw industry object returned by Prisma
// This helps ensure type safety when mapping the data
type RawIndustry = {
  id: string; // Or number
  name: string;
  description: string | null;
  _count: {
    companies: number;
  };
};

export async function GET() {
  try {
    const industries: RawIndustry[] = await prisma.industry.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        _count: {
          select: { companies: true }, // Assumes relation name is 'companies'
        },
      },
      orderBy: {
        name: "asc", // Optional: order alphabetically
      },
    });

    // Process the data to match the desired output format
    const formattedIndustries: IndustryData[] = industries.map((industry) => ({
      id: industry.id,
      name: industry.name,
      // Create a summary from the description (e.g., first 100 chars)
      descriptionSummary: industry.description
        ? industry.description.substring(0, 100) +
          (industry.description.length > 100 ? "..." : "")
        : null,
      companyCount: industry._count.companies,
    }));

    return NextResponse.json({ industries: formattedIndustries });
  } catch (error) {
    console.error("Failed to fetch industries:", error);
    // Return a 500 Internal Server Error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: Handle Prisma client disconnection on server shutdown
// This might be necessary depending on your deployment environment
// process.on('SIGTERM', async () => {
//   await prisma.$disconnect();
// });
