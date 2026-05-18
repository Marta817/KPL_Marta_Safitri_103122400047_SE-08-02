// @ts-ignore
export function processData(data) {
  // 1. konversi ke string agar jalannya .toLowerCase() tidak bikin crash
  const str = String(data).toLowerCase();
  
  // 2. konversi ke tipe Number
  const num = Number(data);
  
  // 3. Validasi: jika tipe aslinya number, ATAU string yang berisi angka valid
  if (typeof data === 'number' || (typeof data === 'string' && !isNaN(num) && data.trim() !== '')) {
    return `Number: ${num * 2}`;
  }
  
  // 4. Jika bukan angka, kembalikan format teks beserta panjang karakternya
  return `Teks: ${str} (panjangnya: ${str.length})`;
}

function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  console.log("=== Hasil Eksekusi Program ===");
  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

// Menjalankan fungsi utama jika file ini dieksekusi langsung
main();