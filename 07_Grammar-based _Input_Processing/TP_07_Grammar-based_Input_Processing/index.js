/**
 * @param {string | string[]} number
 */
function toNumberArray(number) {
  // kalau input string
  if (typeof number === "string") {
    return number
      .split(",")          // pisah pakai koma
      .map(n => parseFloat(n.trim())) // hapus spasi + ubah ke angka
      .filter(n => !isNaN(n)); // buang yang bukan angka
  }

  // kalau input array
  if (Array.isArray(number)) {
    return number
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));
  }

  return [];
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]