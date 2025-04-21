# Charted

Charted is a web application that maps the AI ecosystem across different industries. It helps users discover AI companies and tools by industry, identify gaps in AI innovation, and track the latest trends in artificial intelligence.

## Key Features

- **Industry Explorer**: Browse AI applications across various industries
- **Company Directory**: Discover AI companies, their funding, and technologies
- **Tool Catalog**: Explore AI tools and solutions categorized by industry and use case
- **Gap Radar™**: Identify industries and subdomains with limited AI presence
- **Trend Signals**: Track funding events, acquisitions, and emerging patterns in the AI ecosystem
- **Use Case Examples**: Explore real-world applications of AI with concrete examples from each industry

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later)
- [Docker](https://www.docker.com/) for running the PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the PostgreSQL database:

```bash
docker-compose up -d
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Development**: TypeScript, ESLint, Turbopack

## Database Schema

The application uses a PostgreSQL database with the following main entities:

- Industries
- Companies
- Tools
- Funding Rounds
- Acquisitions
- Use Cases

## License

This project is proprietary and confidential.
