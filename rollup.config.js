import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';
import filesize from 'rollup-plugin-filesize';

export default {
  entry: 'src/index.js',
  dest: 'dist/iterfn.min.js',
  format: 'umd',
  moduleName: 'iterfn',
  exports: 'named',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      jsnext: true
    }),
    uglify({}, minify),
    filesize()
  ]
};
