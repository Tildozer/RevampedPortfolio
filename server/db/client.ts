import pg from "pg";

const client = new pg.Client(
  process.env.DATABASE_URL || "postgresql://localhost:5432/newPortfolio",
);

export default client;
