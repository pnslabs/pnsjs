import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/pns.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/pns.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [typescript(), resolve(), commonjs(), json()],
  },
];
