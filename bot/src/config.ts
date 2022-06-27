import dotenv from "dotenv";

type Config = {
    BOT_API_KEY: string;
    API_URL: string;
    WEB_APP_URL: string;
}

export const config = dotenv.config().parsed as Config;