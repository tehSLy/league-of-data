import fs from "fs/promises";

export class Cache {
  private cache: Map<string, any>;
  constructor(private options: { filename: string }) {}

  get = async <T = unknown>(key: string) => {
    return this.cache.get(key) as T | undefined;
  };

  set = async (key: string, value: any) => {
    return this.cache.set(key, value);
  };

  delete = async (key: string) => {
    return this.cache.delete(key);
  };

  keys = async () => {
    return this.cache.keys();
  };

  init = async () => {
    const contents = await resolveFile(this.options.filename);
    try {
      const parsed = JSON.parse(contents) as Record<string, any>;
      this.cache = new Map(Object.entries(parsed));
      console.log(`Cache has been initialized successfully`);
    } catch (error) {
      throw new Error(`Unable to parse Cache: ${error.message}`);
    }
  };
}

const resolveFile = async (filename: string) => {
  let err;
  try {
    return (await fs.readFile(filename)).toLocaleString();
  } catch (error) {
    err = error;
    try {
      const defaultContent = JSON.stringify({});
      await fs.writeFile(filename, defaultContent);
      return defaultContent;
    } catch (error) {
      err = error;
    }
  }
  throw new Error(
    `Unable to initialize cache: ${err?.message || "Unknown error"}`
  );
};
