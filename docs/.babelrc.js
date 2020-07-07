const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import",
  [
    "@babel/plugin-transform-react-jsx",
    {
      throwIfNamespace: false,
      runtime: "automatic",
      importSource: "@hydrophobefireman/ui-lib",
    },
  ],
];
module.exports = {
  env: {
    modern: { presets: ["@babel/preset-modules"], plugins },
    legacy: {
      presets: [
        [
          "@babel/preset-env",
          {
            exclude: ["@babel/plugin-transform-typeof-symbol"],
            modules: false,
            loose: true,
            corejs: 3,
            targets: ["last 2 versions", "not IE 11"],
            useBuiltIns: "usage",
          },
        ],
      ],
      plugins: [...plugins, ["@babel/plugin-transform-runtime", { corejs: 3 }]],
    },
  },
};
