export default ["umd", "esm"].map((format) => ({
  input: "src/index.js",
  output: {
    file: `dist/index.${format}.js`,
    format,
    name: "useRefs",
    globals: {
      react: "React",
    },
  },
  external: ["react"],
}));
