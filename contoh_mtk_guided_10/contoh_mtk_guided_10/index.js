// @ts-ignore
export function tambah(x, y) {
    return x + y;
}

// @ts-ignore
export function kurang(x, y) {
    return x - y;
}

// @ts-ignore
export function kali(x, y) {
    return x * y;
}

// @ts-ignore
export function bagi(x, y) {
    return x / y;
}

// @ts-ignore
export function pangkat(x, y) {
    return x ** y;
}

/**
 * @param {string} x
 * @param {string} a |
 */
export function plsv_dua(x, a){
    const coeff = parseInt(x);
    return bagi (a, coeff);
}

/**
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */

export function plsv_tiga(x, a, b){
    const konstanta = b - a;

    if (x.length === 1){

    }
}
