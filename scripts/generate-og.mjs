import sharp from "sharp";

const INPUT = "public/og/og-default.svg";
const OUTPUT = "public/og/og-default.jpg";

await sharp(INPUT, { density: 300 })
  .resize(1200, 630)
  .jpeg({ quality: 92 })
  .toFile(OUTPUT);

console.log(`OG image generada: ${OUTPUT}`);
