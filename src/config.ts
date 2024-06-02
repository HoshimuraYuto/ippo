import { lightBlue, magenta, yellow } from "kolorist";

export const languages = {
  ts: {
    title: lightBlue("Typescript"),
    value: "ts",
  },
  js: {
    title: yellow("Javascript"),
    value: "js",
    disabled: true,
  },
};

export const stylesheets = [
  {
    title: magenta("SCSS"),
    value: "scss",
  },
  {
    title: "CSS",
    value: "css",
    disabled: true,
  },
  {
    title: "None",
    value: "nostyle",
    disabled: true,
  },
];

export const frameworks = [
  {
    title: yellow("Vanilla"),
    value: "vanilla",
    languages: [languages.ts, languages.js],
  },
  {
    title: "React",
    value: "react",
    languages: [languages.ts, languages.js],
    disabled: true,
  },
  {
    title: "Vue",
    value: "vue",
    languages: [languages.ts, languages.js],
    disabled: true,
  },
];
