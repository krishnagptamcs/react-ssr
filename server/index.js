require("ignore-styles");

require("@babel/register")({
  ignore: [/(node__modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");

// import "ignore-styles";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);

// require("@babel/register")({
//   ignore: [/(node_modules)/],
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// });

// import "./server.js";
