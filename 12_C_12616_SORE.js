console.log("[BARATIE RESTAURANT]");
console.log('_'.repeat(50));

// Fungsi untuk memproses pembayaran
function processPayment(hargaTotal, bayar) {
    try {
        // Validasi jika input bukan angka
        if (typeof hargaTotal !== 'number' || typeof bayar !== 'number') {
            throw new Error("Both total price and amount given must be numbers");
        }
        // Validasi jika jumlah uang yang diberikan kurang dari total harga
        if (bayar < hargaTotal) {
            throw new Error("Amount given is less than the total price");
        }
        // Jika validasi lulus, hitung kembalian
        const change = bayar - hargaTotal;
        console.log(`Transaction successful. Change to return: ${change}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("Cleaning up resources...");
        console.log('_'.repeat(50));
    }
}

// Inisialisasi data
const testCases = [
    { label: "[1]", total: 50, bayar: "fifty" },   // Input bukan angka
    { label: "[2]", total: 50, bayar: 35 },        // Jumlah uang kurang
    { label: "[3]", total: 50, bayar: 175 }        // Transaksi sukses
];

// Pemanggilan
testCases.forEach(({ label, total, bayar }) => {
    console.log(label);
    processPayment(total, bayar);
});
