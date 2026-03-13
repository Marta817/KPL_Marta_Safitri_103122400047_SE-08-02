const editor = document.getElementById("editor-kecil");

const hf = document.getElementById("hf");
const hb = document.getElementById("hb");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

editor.addEventListener("input", function () {

    let text = editor.value;

    // jumlah semua huruf
    hf.textContent = text.length;

    // hitung huruf besar
    let besar = (text.match(/[A-Z]/g) || []).length;

    // hitung huruf kecil
    let kecil = (text.match(/[a-z]/g) || []).length;

    hb.textContent = besar;
    hk.textContent = kecil;
});


btnBesar.addEventListener("click", function () {
    editor.value = editor.value.toUpperCase();
});

btnKecil.addEventListener("click", function () {
    editor.value = editor.value.toLowerCase();
});