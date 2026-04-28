// @ts-ignore
import express from 'express';
import { specs, swaggerUi } from './swagger.js';

// 🔹 INIT APP
const app = express();

// 🔹 DATA
const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000
    },
    rames: {
        "nasi rames biasa": 15000
    }
};

const PORT = 3000;

// 🔹 MIDDLEWARE
app.use(express.json());

// 🔹 SWAGGER
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
// @ts-ignore
app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);

    res.json({
        kategori_tersedia: categories
    });
});

// 🔹 SERVER
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});