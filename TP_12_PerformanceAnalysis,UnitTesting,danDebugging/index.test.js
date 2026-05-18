import test from 'node:test';
import assert from 'node:assert';
import { processData } from './index.js'; // Mengambil fungsi dari index.js

test.describe('Pengujian Fungsi processData - TP 12', () => {
  
  test.it('Harus sukses memproses string angka menjadi kelipatan matematika', () => {
    assert.strictEqual(processData("123"), "Number: 246");
  });

  test.it('Harus sukses memproses data ber-tipe Number biasa (integer)', () => {
    assert.strictEqual(processData(456), "Number: 912");
  });

  test.it('Harus sukses memproses string teks alfabet biasa', () => {
    assert.strictEqual(processData("hello"), "Teks: hello (panjangnya: 5)");
  });

  test.it('Harus sukses mendukung tipe data desimal / pecahan (float)', () => {
    assert.strictEqual(processData(78.9), "Number: 157.8");
  });

  test.it('Harus sukses mengubah boolean menjadi teks tanpa membuat aplikasi crash', () => {
    assert.strictEqual(processData(true), "Teks: true (panjangnya: 4)");
  });
});