module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    {
      root: ".",
      globalComponents: ["./src/components/**/*.vue"],
    },
  ],
};
