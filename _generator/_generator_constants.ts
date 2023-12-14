// Copyright 2023 mineejo. All rights reserved. MIT license.

import { join } from "../dev_deps.ts";

const ROOT_DIRECTORY = "../";

export const FILE_BLACKLIST: RegExp[] = [/_test\.ts/, /^_/gm];
export const DIRECTORY_BLACKLIST: RegExp[] = [/^_/gm];

export const FILE_SEPARATOR = "_to_";
export const FILE_EXTENSION = ".ts";

export const CONVERSION_DIR = ".";
export const MOD_FILE = `${ROOT_DIRECTORY}mod.ts`;

export const DIRECTORY_EXIT = /(\.\.\/)+/mg;

export function resoleDirectoryExitPath(path: string) {
  return path.replace(DIRECTORY_EXIT, ROOT_DIRECTORY);
}

export function getRootFilePath(file: string) {
  return join(ROOT_DIRECTORY, file);
}

export function getRootDirectoryPath(directory: string) {
  return join(ROOT_DIRECTORY, directory);
}

export const MAIN_COLOR_MODEL = "rgb";
