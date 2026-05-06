// Fungsi hitung huruf alfabet aja (A-Z)
// @ts-ignore
export function hitungHuruf(str) {
    if (!str) return 0;
    
    // pake regex buat ambil yang huruf aja, trus hitung panjangnya
    const huruf = str.replace(/[^a-zA-Z]/g, "");
    return huruf.length;
}

// Fungsi buat hitung kata
// @ts-ignore
export function hitungKata(str) {
    if (!str || str.trim() === "") return 0;

    // split pake spasi, trus filter biar spasi kosong gak kehitung
    const listKata = str.trim().split(/\s+/);
    return listKata.length;
}