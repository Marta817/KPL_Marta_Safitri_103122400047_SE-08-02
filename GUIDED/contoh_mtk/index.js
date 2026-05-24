export function tambah(x,y) {
  return x + y;
}

export function kurang(x,y) {
  return x - y;
}

export function bagi(x,y) {
  return x / y;
}

export function kali(x,y) {
  return x * y;
}

export function pangkat(x,y) {
  return x ** y;
}
// /**
//  * @param {string} str
//  */


// export function persamaan(str) {
//   // Misalkan 3x + 16 =0
//   // cari x

//   const sisiKanan = /\=(.*)/g;
//   const sisiKiri = /(.*)\=/g;

//   const sukuKiri = [];
//   const sukuKanan = [];

//   const kiri = sisiKiri.exec(str);
//   const kanan = sisiKanan.exec(str);

//   console.log(kiri);
//   console.log(kanan);

// }

// persamaan("3x+5=14");

// x + 12 = 25    -> 13
// 3x - 7 = 11    -> 6
/**
 * 
 * @param {string} x 
 * @param {number} a 
 * @param {number} b 
 */
export function plsv_tiga(x, a, b) {
  const koef = parseInt(x.replace("x", ""));
  if (isNaN(koef)) {
    throw new Error("Koefisien tidak valid");
  }
  return (b - a) / koef;
}

export function plsv_dua(x, op, a) {
  const coeff = parseInt(x.replace("x", ""));

  const balikan_op = {
    ">=": "<=",
    "<=": ">=",
    "<": ">",
    ">": "<"
  };

  const op_baru = coeff < 0 ? balikan_op[op] : op;

  return {
    x: "x",
    dengan: op_baru,
    hasil: a / coeff
  };
}