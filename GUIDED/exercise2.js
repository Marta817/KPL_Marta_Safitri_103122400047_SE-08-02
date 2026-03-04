//buatlah sebuah array berisi 3 minuman favorit kalian, dan simpan dalam variabel bernama lastMinuman. Setelah itu ubah 2 element pertama menggunakan notasi kurung dan penugasan. Terakhi, tambahkan minuman baru di depan array

let lastMinuman = ["Es Cokelat", "Matcha", "Jus Alpukat"];
lastMinuman[0] = "Jus Buah Naga";
lastMinuman[1] = "Thai Tea";
lastMinuman.unshift("Air Mineral");

console.log(lastMinuman);