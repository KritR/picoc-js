import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'picocjs'
    }
  ],
  plugins: [nodeResolve(), commonjs()]
};
