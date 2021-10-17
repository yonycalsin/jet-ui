import { createRollupConfig } from './create-rollup-config'

function getRollupConfig(options) {
  const { source } = options

  const name = 'index'

  const options = [
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

  return options.map((option) => createRollupConfig(option))
}

export default getRollupConfig
