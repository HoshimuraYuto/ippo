import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  entries: ["./src/index"],
  outDir: "dist",
  rollup: {
    esbuild: {
      minify: true,
      target: "node20",
    },
    inlineDependencies: true,
  },
});
