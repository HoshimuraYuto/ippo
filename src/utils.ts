#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { red } from "kolorist";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Resolves the absolute path of a relative path based on the current working directory.
 * @param relativePath - The relative path to resolve.
 * @returns The absolute path.
 */
export const resolvePathFromCwd = (relativePath: string): string =>
  path.resolve(process.cwd(), relativePath);

/**
 * Resolves the absolute path of a relative path based on the current program's directory.
 * @param relativePath - The relative path to resolve.
 * @returns The absolute path.
 */
export const resolvePathFromProgramDirectory = (relativePath: string): string =>
  path.resolve(dirname, relativePath);

/**
 * Checks if a directory exists.
 * @param directoryName - The name of the directory to check.
 * @returns True if the directory exists, false otherwise.
 */
export const isDirectoryExist = (directoryName: string): boolean =>
  fs.existsSync(directoryName);

/**
 * Checks if a directory is not empty.
 * @param directoryName - The name of the directory to check.
 * @returns True if the directory is not empty, false otherwise.
 */
export const isDirectoryNotEmpty = (directoryName: string): boolean =>
  fs.readdirSync(directoryName).length > 0;

/**
 * Copies the contents of a source directory to a target directory.
 * @param source - The path of the source directory.
 * @param target - The path of the target directory.
 */
export const copyDirectoryContents = (source: string, target: string): void => {
  fs.cpSync(source, target, { recursive: true });
};
/**
 *
 */
export const onCancel = (): void => {
  console.log(red("✖") + " Operation cancelled");
  process.exit(0);
};
