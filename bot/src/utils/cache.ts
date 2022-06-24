import fs from "fs/promises";
import path from "path";

export class Cache {
  private cache: Map<string, any>;
  constructor(private options: { filename?: string } = {}) {}

  get = async <T = unknown>(key: string) => {
    return this.cache.get(key) as T | undefined;
  };

  set = async (key: string, value: any) => {
    return this.cache.set(key, value);
  };

  init = async () => {
    try {
      const fileContents = await fs.readFile(
        path.join(__dirname, this.options.filename || "../")
      );
    } catch (error) {
      console.warn(`Unable to init cache: ${error.message}`);
    }
  };
}
export const cache = new Cache();
