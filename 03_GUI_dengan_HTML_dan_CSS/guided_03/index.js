/* ===== Mengambil elemen dari HTML menggunakan getElementById ===== */
const elemenEditor = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk");

/* ===== Fungsi untuk menghitung jumlah huruf ===== */
// @ts-ignore
function hitungHuruf(event) {

    const text = event.target.value;

    /* menghitung total karakter */
    // @ts-ignore
    elemenHf.textContent = text.length;

    /* menghitung huruf besar */
    const capsMatch = text.match(/[A-Z]/g);
    // @ts-ignore
    elemenHb.textContent = capsMatch ? capsMatch.length : 0;

    /* menghitung huruf kecil */
    const lowerMatch = text.match(/[a-z]/g);
    // @ts-ignore
    elemenHk.textContent = lowerMatch ? lowerMatch.length : 0;
}

/* ===== Event Listener untuk mendeteksi input pada textarea ===== */
// @ts-ignore
elemenEditor.addEventListener("input", hitungHuruf);


/* ===== Tombol mengubah teks menjadi huruf besar ===== */
// @ts-ignore
document.getElementById("huruf-besar").onclick = () => {
    // @ts-ignore
    elemenEditor.value = elemenEditor.value.toUpperCase();
};

/* ===== Tombol mengubah teks menjadi huruf kecil ===== */
// @ts-ignore
document.getElementById("huruf-kecil").onclick = () => {
    // @ts-ignore
    elemenEditor.value = elemenEditor.value.toLowerCase();
};

/* ===== Tombol mengubah teks menjadi format paragraf ===== */
// @ts-ignore
document.getElementById("huruf-paragraf").onclick = () => {
    // @ts-ignore
    let text = elemenEditor.value.toLowerCase();

    let capitalizedText = text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => {
        return match.toUpperCase();
    });
    // @ts-ignore
    elemenEditor.value = capitalizedText;

    /* memicu kembali event input agar jumlah huruf diperbarui */
    // @ts-ignore
    elemenEditor.dispatchEvent(new Event("input"));
};