import { ModelType, PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

// Helper function to create a slug from a name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Infer the Industry type from a Prisma query result
type Industry = NonNullable<
  Awaited<ReturnType<typeof prisma.industry.findFirst>>
>;

async function main() {
  console.log(`Start seeding ...`);

  // Seed Industries
  const industriesData = [
    {
      name: "Healthcare",
      description:
        "AI applications in diagnostics, drug discovery, patient monitoring, and hospital operations.",
    },
    {
      name: "Finance",
      description:
        "AI used for fraud detection, algorithmic trading, risk management, and customer service chatbots.",
    },
    {
      name: "Logistics",
      description:
        "AI optimizing routes, managing warehouse inventory, predicting demand, and autonomous vehicles.",
    },
    {
      name: "Entertainment",
      description:
        "AI in content generation (music, art, scripts), recommendation systems, and personalized advertising.",
    },
    {
      name: "Agriculture",
      description:
        "AI for precision farming, crop monitoring, pest detection, and yield prediction. Currently underserved.",
    },
    {
      name: "Construction",
      description:
        "Emerging AI use in project planning, safety monitoring, and autonomous machinery. Also underserved.",
    },
    {
      name: "Retail",
      description:
        "AI powers personalized recommendations, inventory management, customer behavior analysis, and checkout systems.",
    },
  ];

  const createdIndustries: Industry[] = [];
  for (const industryData of industriesData) {
    const industry = await prisma.industry.upsert({
      where: { name: industryData.name },
      update: {}, // No updates needed if it exists
      create: {
        ...industryData,
        slug: createSlug(industryData.name),
      },
    });
    createdIndustries.push(industry);
    console.log(
      `Created or found industry with id: ${industry.id} (${industry.name})`
    );
  }

  // Helper to find industry ID by name
  const getIndustryId = (name: string): number => {
    const found = createdIndustries.find((i) => i.name === name);
    if (!found) {
      throw new Error(
        `Industry with name "${name}" not found in created industries.`
      );
    }
    return found.id;
  };

  // Seed Companies
  const companiesData = [
    {
      name: "Zebra Medical Vision",
      description: "AI solutions for radiology image analysis.",
      websiteUrl: "https://www.zebra-med.com/",
      industryName: "Healthcare",
      modelType: ModelType.CV,
      approachSummary:
        "Uses computer vision to detect diseases in medical scans.",
      foundedYear: 2014,
      totalFundingUsd: 50000000,
    },
    {
      name: "PathAI",
      description: "AI-powered pathology platform.",
      websiteUrl: "https://www.pathai.com/",
      industryName: "Healthcare",
      modelType: ModelType.CV,
      approachSummary: "Applies machine learning to improve cancer diagnosis.",
      foundedYear: 2016,
    },
    {
      name: "Upstart",
      description: "AI lending platform.",
      websiteUrl: "https://www.upstart.com/",
      industryName: "Finance",
      modelType: ModelType.ClassicalML,
      approachSummary:
        "Uses AI to assess credit risk beyond traditional scores.",
      foundedYear: 2012,
    },
    {
      name: "Nuro",
      description: "Autonomous delivery vehicles.",
      websiteUrl: "https://www.nuro.ai/",
      industryName: "Logistics",
      modelType: ModelType.CV,
      approachSummary:
        "Develops self-driving vehicles for local goods transportation.",
      foundedYear: 2016,
    },
    {
      name: "Blue River Technology",
      description: "AI for precision agriculture (acquired by John Deere).",
      websiteUrl: "https://www.bluerivertechnology.com/",
      industryName: "Agriculture",
      modelType: ModelType.CV,
      approachSummary:
        "Uses computer vision on tractors to identify and spray weeds precisely.",
      foundedYear: 2011,
    },
    {
      name: "Built Robotics",
      description: "Autonomous construction equipment.",
      websiteUrl: "https://www.builtrobotics.com/",
      industryName: "Construction",
      modelType: ModelType.CV,
      approachSummary:
        "Develops AI guidance systems to automate heavy construction machinery.",
      foundedYear: 2016,
    },
    {
      name: "Runway ML",
      description: "AI tools for artists and designers.",
      websiteUrl: "https://runwayml.com/",
      industryName: "Entertainment",
      modelType: ModelType.MultiModal,
      approachSummary:
        "Provides creative tools powered by generative AI models for video and image editing.",
      foundedYear: 2018,
    },
  ];

  const createdCompanies = [];
  for (const companyData of companiesData) {
    const { industryName, ...restOfCompanyData } = companyData;
    const industryId = getIndustryId(industryName);

    const company = await prisma.company.upsert({
      where: { name: restOfCompanyData.name },
      update: {
        description: restOfCompanyData.description,
        websiteUrl: restOfCompanyData.websiteUrl,
        industryId,
        modelType: restOfCompanyData.modelType as ModelType,
        approachSummary: restOfCompanyData.approachSummary,
        foundedYear: restOfCompanyData.foundedYear,
        totalFundingUsd: restOfCompanyData.totalFundingUsd,
      },
      create: {
        ...restOfCompanyData,
        industryId,
        slug: createSlug(restOfCompanyData.name),
      },
    });
    createdCompanies.push(company);
    console.log(
      `Created or updated company with id: ${company.id} (${company.name})`
    );
  }

  // Seed Tools
  const toolsData = [
    {
      name: "Zebra AI for X-Ray",
      description: "AI-powered X-ray analysis tool",
      websiteUrl: "https://www.zebra-med.com/solutions",
      isOpenSource: false,
      useCase: "Medical imaging analysis",
      companyName: "Zebra Medical Vision",
      industryName: "Healthcare",
    },
    {
      name: "Runway Gen-2",
      description: "Text-to-video AI model",
      websiteUrl: "https://runwayml.com/gen-2",
      isOpenSource: false,
      useCase: "Video generation",
      companyName: "Runway ML",
      industryName: "Entertainment",
    },
  ];

  for (const toolData of toolsData) {
    const { companyName, industryName, ...restOfToolData } = toolData;
    const company = createdCompanies.find((c) => c.name === companyName);
    const industryId = getIndustryId(industryName);

    await prisma.tool.upsert({
      where: { name: toolData.name },
      update: restOfToolData,
      create: {
        ...restOfToolData,
        companyId: company?.id,
        industryId,
      },
    });
    console.log(`Created or updated tool: ${toolData.name}`);
  }

  // Seed Funding Rounds
  const fundingRoundsData = [
    {
      companyName: "Zebra Medical Vision",
      roundType: "Series C",
      amountUsd: 30000000,
      date: new Date("2018-06-07"),
      leadInvestor: "HealthTech Capital",
    },
    {
      companyName: "Nuro",
      roundType: "Series C",
      amountUsd: 500000000,
      date: new Date("2021-03-15"),
      leadInvestor: "Tiger Global",
    },
  ];

  for (const roundData of fundingRoundsData) {
    const { companyName, ...restOfRoundData } = roundData;
    const company = createdCompanies.find((c) => c.name === companyName);
    if (!company) continue;

    await prisma.fundingRound.create({
      data: {
        ...restOfRoundData,
        companyId: company.id,
      },
    });
    console.log(
      `Created funding round for ${companyName}: ${roundData.roundType}`
    );
  }

  // Seed Use Case Cards
  const useCaseCardsData = [
    {
      title: "AI in Medical Imaging",
      description:
        "AI algorithms analyze medical images to detect diseases and abnormalities, helping radiologists work more efficiently.",
      industryName: "Healthcare",
      exampleCompanyName: "Zebra Medical Vision",
    },
    {
      title: "AI-Powered Video Creation",
      description:
        "Generate and edit videos using AI models, transforming text descriptions into visual content.",
      industryName: "Entertainment",
      exampleCompanyName: "Runway ML",
    },
  ];

  for (const cardData of useCaseCardsData) {
    const { industryName, exampleCompanyName, ...restOfCardData } = cardData;
    const industryId = getIndustryId(industryName);
    const exampleCompany = exampleCompanyName
      ? createdCompanies.find((c) => c.name === exampleCompanyName)
      : null;

    await prisma.useCaseCard.create({
      data: {
        ...restOfCardData,
        industryId,
        exampleCompanyId: exampleCompany?.id,
      },
    });
    console.log(`Created use case card: ${cardData.title}`);
  }

  // Seed Company Tags
  const companyTagsData = [
    {
      companyName: "Zebra Medical Vision",
      tags: ["Medical Imaging", "Healthcare AI"],
    },
    { companyName: "Runway ML", tags: ["Creative AI", "Video Generation"] },
  ];

  for (const { companyName, tags } of companyTagsData) {
    const company = createdCompanies.find((c) => c.name === companyName);
    if (!company) continue;

    for (const tag of tags) {
      await prisma.companyTag.create({
        data: {
          label: tag,
          companyId: company.id,
        },
      });
      console.log(`Created tag "${tag}" for company ${companyName}`);
    }
  }

  // Seed Acquisitions
  const acquisitionsData = [
    {
      acquiringCompanyName: "John Deere",
      acquiredCompanyName: "Blue River Technology",
      date: new Date("2017-09-06"),
      amountUsd: 305000000,
    },
  ];

  for (const acquisitionData of acquisitionsData) {
    const { acquiringCompanyName, acquiredCompanyName, ...restOfData } =
      acquisitionData;

    // For companies that aren't in our main dataset (like John Deere)
    // we need to create them first
    const acquiringCompany = await prisma.company.upsert({
      where: { name: acquiringCompanyName },
      update: {},
      create: {
        name: acquiringCompanyName,
        slug: createSlug(acquiringCompanyName),
        description: "Agricultural machinery manufacturer",
        websiteUrl: "https://www.deere.com",
        modelType: ModelType.Other,
        approachSummary: "Traditional company acquiring AI capabilities",
        industryId: getIndustryId("Agriculture"),
      },
    });

    const acquiredCompany = createdCompanies.find(
      (c) => c.name === acquiredCompanyName
    );
    if (!acquiredCompany) continue;

    await prisma.acquisition.create({
      data: {
        ...restOfData,
        acquiringCompanyId: acquiringCompany.id,
        acquiredCompanyId: acquiredCompany.id,
      },
    });
    console.log(
      `Created acquisition: ${acquiringCompanyName} acquired ${acquiredCompanyName}`
    );
  }

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
