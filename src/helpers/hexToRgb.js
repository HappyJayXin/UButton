export default function(hex) {
  let hexRe;
  let repeatTime = 1;

  if (hex.length > 4) {
    hexRe = new RegExp("^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$", "i");
    repeatTime = 1;
  } else {
    hexRe = new RegExp("^#?([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$", "i");
    repeatTime = 2;
  }

  const result = hexRe.exec(hex);
  const getRGB = index => result[index].repeat(repeatTime);

  const r = parseInt(getRGB(1), 16);
  const g = parseInt(getRGB(2), 16);
  const b = parseInt(getRGB(3), 16);

  return `${r},${g},${b}`;
}
