import fs from "fs";
import { buildSchema } from "graphql";
import path from "path";
import { config } from "./config";

const resolveSchema = () => {
  const schemaPath = path.join(
    __dirname,
    "../",
    config.GENERATED_OUTPUT,
    "schema.gql"
  );
  const stringSchema = fs.readFileSync(schemaPath).toString();  
  return buildSchema(stringSchema);
};

export const schema = resolveSchema();
