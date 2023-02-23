import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default [
  // Web bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/pns.js',
      format: 'es',
    },
    plugins: [typescript(), resolve(), commonjs(), json()],
    // Exclude Node.js-specific modules from the web bundle
    external: ['fs', 'path'],
  },
  // Node.js bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/pns-node.js',
      format: 'cjs',
    },
    plugins: [typescript(), resolve(), commonjs(), json()],
  },
];
