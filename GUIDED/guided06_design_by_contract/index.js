/**
 * @param {number} a
 * @param {number} b
 */
function div(a, b) {
    //Prakondisi
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new TypeError("Salah type data untuk argumen a");
    }
    if (b === 0) {
        return 0;
    }

    const hasil = a / b;

    //Pascakondisi
    if(hasil * b === a) {
        return hasil;
    }

    return 0;
}

console.log(
    div(28, 40)
);