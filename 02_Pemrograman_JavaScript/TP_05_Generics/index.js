function hitung(str, mode) {

    let total = 0;

    for (let c of str) {

        if (mode === "huruf") {
            if (c === " ") {
                continue;
            }
        }

        total++;
    }

    return total;
}

const str = "Bar bar bar";

console.log(
    hitung(str, "semua")
);

console.log(
    hitung(str, "huruf")
);

hitung(str, "huruf");