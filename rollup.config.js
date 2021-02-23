import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [commonjs()]
};
