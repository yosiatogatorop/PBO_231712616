// Kelas Produk yang sudah ada
class Produk {
    constructor(nama, hargaPokok) {
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

    hitungDiskon() {
        return this.hargaPokok * 0.1; // Diskon 10%
    }

    hitungPPN() {
        return this.hargaPokok * 0.11; // PPN 11%
    }

    infoProduk() {
        const diskon = this.hitungDiskon();
        const ppn = this.hitungPPN();
        const hargaSetelahDiskon = this.hargaPokok - diskon;
        const hargaJual = hargaSetelahDiskon + ppn;

        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga Pokok: Rp${this.hargaPokok}`);
        console.log(`Diskon: Rp${diskon}`);
        console.log(`Harga Setelah Diskon: Rp${hargaSetelahDiskon}`);
        console.log(`PPN: Rp${ppn}`);
        console.log(`Harga Jual Akhir: Rp${hargaJual}`);
        console.log("=================");
    }
}

// Kelas ListProduk untuk mengelola daftar produk
class ListProduk {
    constructor() {
        this.listProduk = []; // Array untuk menyimpan produk
    }

    addProduk(produk) {
        this.listProduk.push(produk); // Menambahkan produk ke daftar
        console.log(`Produk '${produk.nama}' berhasil ditambahkan.`);
    }

    removeProduk(nama) {
        const index = this.listProduk.findIndex(produk => produk.nama === nama);
        if (index !== -1) {
            this.listProduk.splice(index, 1); // Menghapus produk berdasarkan nama
            console.log(`Produk ${nama} telah dihapus.`);
        } else {
            console.log(`Produk '${nama}' tidak ditemukan.`);
        }
    }

    tampilkanSemuaProduk() {
        if (this.listProduk.length === 0) {
            console.log("Tidak ada produk dalam daftar.");
            return;
        }
        console.log();
        this.listProduk.forEach(produk => produk.infoProduk());
    }
}

// Membuat objek ListProduk
const listProduk = new ListProduk();

// Membuat beberapa produk
const produk1 = new Produk("Laptop", 15000000);
const produk2 = new Produk("Smartphone", 5000000);

// Menambahkan produk ke dalam daftar menggunakan objek
listProduk.addProduk(produk1);
listProduk.addProduk(produk2);

// Menampilkan semua produk yang ada di dalam daftar
console.log("\nDaftar produk saat ini:");
console.log("=================");
listProduk.tampilkanSemuaProduk();

// Menghapus produk dari daftar berdasarkan nama
console.log("");
listProduk.removeProduk("Smartphone");

// Menampilkan semua produk setelah penghapusan
console.log("\nDaftar produk setelah penghapusan:");
console.log("=================");
listProduk.tampilkanSemuaProduk();