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
elemenEditor.addEventListener("input", hitungHuruf);

// 2. Event listener untuk tombol huruf besar
document.getElementById("huruf-besar").addEventListener("click", function() {
    elemenEditor.value = elemenEditor.value.toUpperCase();
    hitungHuruf({target: elemenEditor});
});

// 3. Event listener untuk tombol huruf kecil
document.getElementById("huruf-kecil").addEventListener("click", function() {
    elemenEditor.value = elemenEditor.value.toLowerCase();
    hitungHuruf({target: elemenEditor});
});

// 4. Event listener untuk tombol paragraf
document.getElementById("huruf-paragraf").addEventListener("click", function() {
    let teks = elemenEditor.value.toLowerCase();
    teks = teks.replace(/(^\w|\.\s+\w)/g, function(huruf) {
        return huruf.toUpperCase();
    });
    elemenEditor.value = teks;
    hitungHuruf({target: elemenEditor});
});

// 5. Jalankan sekali saat halaman dimuat
hitungHuruf({target: elemenEditor});