/**
 * @copyright Stitches Authors
 * @url https://git.io/JKzsW
 */

const ansi = (id: number) => `\x1b[${id}m`
const escape = (string: string) => string.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
const ansiRe = RegExp(escape(ansi(0)), 'g')

export const color = (string: string, id: number) => ansi(id) + string.replace(ansiRe, ansi(0) + ansi(id)) + ansi(0)

export const bold = (string: string) => color(string, 1)
export const dim = (string: string) => color(string, 2)
export const underline = (string: any) => color(string, 4)
export const invert = (string: string) => color(string, 7)

export const black = (string: any) => color(string, 30)
export const red = (string: string) => color(string, 31)
export const green = (string: string) => color(string, 32)
export const yellow = (string: any) => color(string, 33)
export const blue = (string: any) => color(string, 34)
export const magenta = (string: any) => color(string, 35)
export const cyan = (string: string) => color(string, 36)
export const white = (string: any) => color(string, 37)

export const bgBlack = (string: any) => color(string, 40)
export const bgRed = (string: any) => color(string, 41)
export const bgGreen = (string: any) => color(string, 42)
export const bgYellow = (string: any) => color(string, 43)
export const bgBlue = (string: any) => color(string, 44)
export const bgMagenta = (string: any) => color(string, 45)
export const bgCyan = (string: any) => color(string, 46)
export const bgWhite = (string: any) => color(string, 47)

export const pad = (string: string, size = 0, char = ' ') =>
  string.padStart((string.length + size) / 2, char).padEnd(size, char)

export const box = ({ name, types }) => {
  const border = (text: string) => dim(cyan(text))
  const v = border('│')
  const h = (size: number) => border(pad('', size, '┈'))

  const nameLead = pad('', 16 - name.length / 2)
  const nameTail = pad('', nameLead.length + (name.length % 2))
  const nullLine = pad('', 32)

  const kb = (kb: string | any[]) => bold(green(kb.slice(0, -3) as string)) + ' ' + dim(kb.slice(-2) as string)

  return [
    border(`╭────────────────────────────────╮`),
    `${v}${nameLead}${bold(white(name))}${nameTail}${v}`,
    `${v}${nullLine}${v}`,
    ...Object.entries(types).map(([type, { min, gzp }]: any) =>
      [
        `${v}  ${h(15 - type.length)} ${cyan(type)} ${h(15 - type.length - (type.length % 2))}  ${v}`,
        `${v}  ${' '.repeat(3 - (min.length % 2))}${kb(min + ' kB')}${' '.repeat(3)} ${border('╷')} ${' '.repeat(
          3 - (gzp.length % 2),
        )}${kb(gzp + ' kB')}${' '.repeat(3)} ${v}`,
        `${v}    ${dim(cyan('minified'))}    ${border('╵')}    ${dim(cyan('gzipped'))}    ${v}`,
      ].join('\n'),
    ),
    border(`╰────────────────────────────────╯`),
  ].join('\n')
}

export const passIcon = green('✔')
export const failIcon = red('✖')

export const passText = (text = 'PASS') => invert(green(bold(` ${text} `)))
export const failText = (text = 'FAIL') => invert(red(bold(` ${text} `)))
export const infoText = (text = 'INFO') => dim(text)
