import { createRollupConfig } from './create-rollup-config'

function getRollupEsmConfig(options) {
  const { source } = options

  return createRollupConfig({
    name: 'index',
    format: 'esm',
    input: source,
  })
}

export default getRollupEsmConfig
