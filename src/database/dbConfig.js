require("dotenv").config();

const config = {
  server: process.env.DB_URL,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
  }
};

module.exports = config;