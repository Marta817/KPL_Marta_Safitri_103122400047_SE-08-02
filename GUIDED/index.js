/**
 * 1. Demonstrasi DOM menghitung huruf,huruf besar dan huruf kecil
 * 2. penggunaan getElementById dan apa artinya
 * 3. penggunaan addEventListener
 */
// Jawab:
//1.Fungsi hitungHuruf() sudah:
//Menghitung total huruf,Menghitung huruf besar,Menghitung huruf kecil,Menampilkan ke DOM (textContent) 
//2. document.getElementById("editor-kecil"). Artinya yaitu textarea tempat ngetik
//document.getElementById("hf"). Artinya yaitu span buat nampilin jumlah huruf
//document.getElementById("hb"),. Artinya yaitu span buat nampilin jumlah huruf besar
//document.getElementById("hk"). Artinya yaitu span buat nampilin jumlah huruf kecil
//

// 1. Event listener untuk input (saat mengetik)
// @ts-ignore
elemenEditor.addEventListener("input", hitungHuruf);

// 2. Event listener untuk tombol huruf besar
// @ts-ignore
document.getElementById("huruf-besar").addEventListener("click", function() {
    // @ts-ignore
    elemenEditor.value = elemenEditor.value.toUpperCase();
    // @ts-ignore
    hitungHuruf({target: elemenEditor});
});

// 3. Event listener untuk tombol huruf kecil
// @ts-ignore
document.getElementById("huruf-kecil").addEventListener("click", function() {
    // @ts-ignore
    elemenEditor.value = elemenEditor.value.toLowerCase();
    // @ts-ignore
    hitungHuruf({target: elemenEditor});
});

// 4. Event listener untuk tombol paragraf
// @ts-ignore
document.getElementById("huruf-paragraf").addEventListener("click", function() {
    // @ts-ignore
    let teks = elemenEditor.value.toLowerCase();
    teks = teks.replace(/(^\w|\.\s+\w)/g, function(/** @type {string} */ huruf) {
        return huruf.toUpperCase();
    });
    // @ts-ignore
    elemenEditor.value = teks;
    // @ts-ignore
    hitungHuruf({target: elemenEditor});
});

// 5. Jalankan sekali saat halaman dimuat
// @ts-ignore
hitungHuruf({target: elemenEditor});
