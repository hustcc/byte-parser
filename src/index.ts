const MAP = {
  k: 1,
  m: 2,
  g: 3,
  t: 4,
  p: 5,
  e: 6,
  z: 7,
  y: 8,
}

/**
 * parse byte string into a number
 * @param byteString
 */
export default function(byteString: string, ratio = 1024): number {
  const match = byteString.match(/^(\d*\.*\d*)\s*([kKmMgGtTpPeEzZyY]{0,1}[bB]{0,1})$/);
  if (!match) {
    throw `invalid byte string '${byteString}'!`;
  }

  const size = match[1] as any as number;
  const unit = match[2].toLowerCase().replace(/(b$)/, ''); // 删除最后的 b

  return size * Math.pow(ratio, MAP[unit] || 0);
}