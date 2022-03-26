import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx']
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic'
            }
          ]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator'
        ]
      }),
      commonjs()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/index.d.ts',
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts'
    },
    external: ['react']
  }
];
