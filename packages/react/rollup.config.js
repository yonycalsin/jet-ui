import getRollupConfig from '../../scripts/rollup/get-rollup-config'
import pkg from './package.json'

export default getRollupConfig({
  source: pkg.source,
})
