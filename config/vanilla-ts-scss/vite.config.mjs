export default {
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "src/index.ts",
        style: "src/styles.scss",
      },
      output: {
        assetFileNames: "css/[name].css",
        entryFileNames: "js/[name].js",
      },
    },
  },
};
