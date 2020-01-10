import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const umdGlobals = {
  react: 'React',
  'prop-types': 'PropTypes',
}

export default {
  input: 'src/abc.js',
  external: Object.keys(umdGlobals),
  output: {
    file: 'dist/index.js',
    name: 'index.js',
    format: 'umd',
    globals: umdGlobals,
  },
  plugins: [
    postcss({
      modules: true,
      extensions: ['scss'],
    }),
    babel({ exclude: '**/node_modules/**' }),
    uglify(),
  ],
}
