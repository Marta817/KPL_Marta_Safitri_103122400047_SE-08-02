// @ts-ignore
import express from "express";
import { swaggerUi } from "./swagger";

const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";

//Middleware untuk JSON
app.use(express.json());

//MiddLawer untuk openAPI Swagger
// @ts-ignore
app.use("/docs", swaggerUi.serve,specs);

// @ts-ignore
const daftarFilm = [];

/**
 * @swagger
 * /film
 *    get:
 *     summary: daftar film yg disimpan
 *     respons:
 *        200:
 *         description: daftar film berhasil diambil
 *        404:
 *         description: daftar film tidak diremukan
 */

// @ts-ignore
//ambil semua film
app.get('/film', (req,res) =>{
   // @ts-ignore
   return res.status(200).json(daftarFilm);
})



//ambil satu film
// @ts-ignore
app.get('/film/:id', (req,res) =>{
   // @ts-ignore
   const film = daftarFilm.find(m => m.id === parseInt(req.params.id));
   if (!film){
    return res.status(400);
   }

   return res.status(200).json(film);
})

/**
 * @swagger
 * /film
 *    post:
 *     summary: daftar film yg disimpan
 *     respons:
 *        200:
 *         description: daftar film berhasil diambil
 *        404:
 *         description: daftar film tidak diremukan
 */

// @ts-ignore
//tambah film baru
app.post('/film', (req,res) =>{
    const film = {
        id : daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFilm.push(film);
    res.status(201).json(film);
})

/**
 * @swagger
 * /film
 *    delete:
 *     summary: daftar film yg disimpan
 *     respons:
 *        200:
 *         description: film berhasil dihapus
 *        404:
 *         description: id film tidak diremukan
 */

// @ts-ignore
//hapus film
app.delete('/film/:id', (req,res) => {
    // @ts-ignore
    const indexFilm = daftarFilm.findIndex(f => f.id === Number (req.params.id));
    if(indexFilm === -1){
        return res.status(404);
    }

    // @ts-ignore
    const filmDihapus = daftarFilm.splice(indexFilm,1);

    return res.json(filmDihapus);
})


app.listen(8000, "localhost", () => console.log('Peladem berjalan di ${HOSTNAME}:${port}'));