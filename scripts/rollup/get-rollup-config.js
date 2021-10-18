import { createRollupConfig } from './create-rollup-config'

function getRollupConfig(options) {
  const { source } = options

  const name = 'index'

  const rollupOptions = [
    {
      name,
      format: 'cjs',
      input: source,
    },
    { name, format: 'esm', input: source },
    {
      name,
      format: 'umd',
      input: source,
    },
  ]

  return rollupOptions.map((option) => createRollupConfig(option))
}

export default getRollupConfig
