export const config = require("dotenv").config().parsed as {
  API_KEY: string;
  GENERATED_OUTPUT: string;
  PORT: string;
};
