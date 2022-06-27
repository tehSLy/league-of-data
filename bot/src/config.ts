type Config = {
  BOT_KEY: string;
  API_PORT: string;
  API_DOMAIN: string;
  APP_URL: string;
  GENERATED_OUTPUT: string;
};

export const config = process.env as Config;
