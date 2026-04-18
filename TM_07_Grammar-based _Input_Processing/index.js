/**
 * @param {string} text
 */
function parseRobots(text) {
  const hasil = {
    userAgent: "",
    allow: [],
    disallow: [],
    sitemap: ""
  };

  const baris = text.split("\n");

  for (let i = 0; i < baris.length; i++) {
    let line = baris[i].trim();
    if (line === "") continue;

    const bagian = line.split(":");
    const key = bagian[0].toLowerCase();
    const value = bagian.slice(1).join(":").trim();

    if (key === "user-agent") {
      hasil.userAgent = value;
    } else if (key === "allow") {
      // @ts-ignore
      hasil.allow.push(value);
    } else if (key === "disallow") {
      // @ts-ignore
      hasil.disallow.push(value);
    } else if (key === "sitemap") {
      hasil.sitemap = value;
    }
  }

  return hasil;
}

module.exports = parseRobots;