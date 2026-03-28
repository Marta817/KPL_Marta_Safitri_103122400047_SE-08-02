const editor = document.getElementById("editor-kecil");

const hf = document.getElementById("hf");
const hb = document.getElementById("hb");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const btnTerang = document.getElementById("tombol-terang");
const btnGelap = document.getElementById("tombol-gelap");

// hitung huruf
editor.addEventListener("input", function () {

    let text = editor.value;

    hf.textContent = text.length;

    let besar = (text.match(/[A-Z]/g) || []).length;

    let kecil = text.length - besar;

    hb.textContent = besar;
    hk.textContent = kecil;
});

// ubah huruf besar
btnBesar.addEventListener("click", function () {
    editor.value = editor.value.toUpperCase();
});

// ubah huruf kecil
btnKecil.addEventListener("click", function () {
    editor.value = editor.value.toLowerCase();
});

const btnSepia = document.getElementById("tombol-sepia");

// MODE GELAP
btnGelap.addEventListener("click", function () {
    document.body.classList.add("mode-gelap");
    document.body.classList.remove("sepia-mode");
});

// MODE TERANG
btnTerang.addEventListener("click", function () {
    document.body.classList.remove("mode-gelap");
    document.body.classList.remove("sepia-mode");
});

//MODE SEPIA
btnSepia.addEventListener("click", function () {
    document.body.classList.remove("mode-gelap");
    document.body.classList.add("sepia-mode");
});