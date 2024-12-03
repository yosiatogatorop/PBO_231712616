console.log("[BARATIE RESTAURANT]");
console.log('_'.repeat(50));

// Fungsi untuk memproses pembayaran
function processPayment(hargaTotal, bayar, metode) {
    try {
        // Validasi metode pembayaran
        if (!['cash', 'credit', 'voucher'].includes(metode)) {
            throw new Error("Unknown payment method");
        }
        // Validasi jika input bukan angka
        if (typeof hargaTotal !== 'number' || typeof bayar !== 'number') {
            throw new Error("Both total price and amount given must be numbers");
        }
        // Validasi jika jumlah uang yang diberikan kurang dari total harga
        if (bayar < hargaTotal) {
            throw new Error("Amount given is less than the total price");
        }
        // Jika metode adalah voucher
        if (metode === 'voucher') {
            console.log("Processing voucher payment...");
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
    { label: "[1]", total: 50, bayar: "fifty", method: "credit" },   
    { label: "[2]", total: 50, bayar: 35, method: "cash" },          
    { label: "[3]", total: 50, bayar: 616, method: "voucher" },      
    { label: "[4]", total: 50, bayar: 75, method: "bitcoin" }        
];

// Pemanggilan
testCases.forEach(({ label, total, bayar, method }) => {
    console.log(label);
    processPayment(total, bayar, method);
});
