import fs from "fs";
import path from "path";
import * as YAML from "yaml";

export function loadYAML<T>(fileName: string): T {
  const filePath = path.resolve("./data", fileName);
  const content = fs.readFileSync(filePath, { encoding: "utf-8" });
  return YAML.parse(content) as T;
}

export function assetPath(src: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
