import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import less from "less";
import pkg from "./package.json";
import { uglify } from "rollup-plugin-uglify";

const processLess = function(context, payload) {
  return new Promise((resolve, reject) => {
    less.render(
      {
        file: context
      },
      function(err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );

    less.render(context, {}).then(
      function(output) {
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function(err) {
        reject(err);
      }
    );
  });
};

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    // uglify(),
    external(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    })
  ]
};
