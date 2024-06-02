#!/usr/bin/env node

import fs from "node:fs";

import prompts from "prompts";

import { languages, frameworks, stylesheets } from "./config.ts";
import {
  resolvePathFromCwd,
  isDirectoryExist,
  isDirectoryNotEmpty,
  copyDirectoryContents,
  onCancel,
  resolvePathFromProgramDirectory,
} from "./utils.ts";

type PromptResult<T> = { value: T };

try {
  console.clear();

  const projectNamePrompt: PromptResult<string> = await prompts(
    {
      type: "text",
      name: "value",
      message: "Project name?",
      initial: "./my-project",
    },
    { onCancel },
  );
  const projectName = projectNamePrompt.value;

  if (isDirectoryExist(projectName) && isDirectoryNotEmpty(projectName)) {
    const overwritePrompt: PromptResult<boolean> = await prompts(
      {
        type: "confirm",
        name: "value",
        message: `The chosen directory "${projectName}" is not empty. The existing files will be overwritten. Do you want to proceed?`,
      },
      { onCancel },
    );
    const isOverwrite = overwritePrompt.value;

    if (!isOverwrite) onCancel();
  }

  const frameworkPrompt: PromptResult<string> = await prompts(
    {
      type: "select",
      name: "value",
      message: "Choose a framework.",
      choices: frameworks,
      initial: 0,
    },
    { onCancel },
  );
  const framework = frameworkPrompt.value;

  const selectedFramework = frameworks.find((item) => item.value === framework)
    ?.languages || [languages.js];

  const languagePrompt: PromptResult<string> = await prompts(
    {
      type: "select",
      name: "value",
      message: "Choose a language.",
      choices: selectedFramework,
      initial: 0,
    },
    { onCancel },
  );
  const language = languagePrompt.value;

  const stylesheetPrompt: PromptResult<string> = await prompts(
    {
      type: "select",
      name: "value",
      message: "Choose a stylesheet language.",
      choices: stylesheets,
      initial: 0,
    },
    { onCancel },
  );
  const stylesheet = stylesheetPrompt.value;

  const confirmPrompt: PromptResult<boolean> = await prompts(
    {
      type: "toggle",
      name: "value",
      message: "Are you ready to proceed?",
      initial: true,
      active: "Yes",
      inactive: "No",
    },
    { onCancel },
  );
  const confirm = confirmPrompt.value;

  if (!confirm) onCancel();

  const projectRootDirectory = resolvePathFromCwd(projectName);

  fs.mkdirSync(projectRootDirectory);
  copyDirectoryContents(
    resolvePathFromProgramDirectory("../config/base"),
    projectRootDirectory,
  );

  copyDirectoryContents(
    resolvePathFromProgramDirectory(
      `../config/${framework}-${language}-${stylesheet}`,
    ),
    projectRootDirectory,
  );
} catch (error) {
  console.log(error);
  process.exit(0);
}
