// @ts-ignore
const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');

const app = express();
const PORT = 3000;

app.use(express.json());

// Dokumentasi Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               tebakan:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hasil tebakan muncul
 */
// @ts-ignore
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({ error: "Nama dan tebakan harus diisi" });
    }

    // hitung jumlah nilai karakter (ASCII) dari nama
    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash += nama.charCodeAt(i);
    }
    
    // Angka target antara 1 - 100
    const angkaBenar = (hash % 100) + 1;

    let hasil;
    if (tebakan === angkaBenar) {
        hasil = `Benar sekali! Tebakannya adalah ${angkaBenar}.`;
    } else if (tebakan > angkaBenar) {
        hasil = "Tebakanmu terlalu tinggi!";
    } else {
        hasil = "Tebakanmu terlalu rendah!";
    }

    res.json({
        jawaban: hasil
    });
});

app.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
    console.log(`Cek dokumentasi di http://localhost:3000/docs`);
});