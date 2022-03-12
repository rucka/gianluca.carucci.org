export const svgBackgroundImageUrl = (s: string) => {
  return `url("data:image/svg+xml,${encodeSVG(s)}")`
}

function encodeSVG(data: string) {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g
  data = data.replace(/"/g, "'")

  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  return data.replace(symbols, encodeURIComponent)
}
