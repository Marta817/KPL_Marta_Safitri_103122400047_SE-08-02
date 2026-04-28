require('dotenv').config(); 

// @ts-ignore
const axios = require('axios');

// @ts-ignore
async function konversiKurs(jumlahRupiah) {
    try {
        // @ts-ignore
        const response = await axios.get(process.env.BASE_API);
        const rates = response.data.data;

       
        const hasilCNH = (jumlahRupiah / 2517); 
        const hasilEUR = (jumlahRupiah / 17000); 
        const tanggal = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
        }).format(new Date());

        const formatIDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(jumlahRupiah);
        const formatCNH = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'CNH' }).format(hasilCNH);
        const formatEUR = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(hasilEUR);

        console.log(`Kurs ${formatIDR.replace("Rp", "Rp ")} pada ${tanggal} adalah ${formatCNH.replace("CNH", "CNH ")} dan ${formatEUR.replace("€", " €")}`);
    } catch (error) {
        // @ts-ignore
        console.error("Gagal ambil data:", error.message);
    }
}

konversiKurs(25000);