const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { print } = require("graphql");
const { Color } = require("./utils");

console.log(Color.FgYellow, "Starting Schema generation process...");
const config = require("dotenv").config().parsed;
const path = require("path");
const fs = require("fs");


const loadedFiles = loadFilesSync(path.join(__dirname, "gql/**/*.gql"));
console.log(`Loaded:`, Color.Reset, ` ${loadedFiles.length} file(s)`);
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs = print(typeDefs);

const target = path.join(
  __dirname,
  config.API_DIR,
  config.GENERATED_OUTPUT,
  "schema.gql"
);
console.log(Color.FgYellow, `Generation target:`, Color.Reset, ` ${target}`);

fs.writeFileSync(target, printedTypeDefs);
fs.writeFileSync(path.join(__dirname, "schema.gql"), printedTypeDefs);
console.log(Color.FgGreen, "Successfully generated schema");
console.log(Color.Reset);