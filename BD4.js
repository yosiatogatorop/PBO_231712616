// Interface IHitungDiskon
const IHitungDiskon = (Base) => 
    class extends Base {
        hitungDiskon() {
            throw new Error("Metode 'hitungDiskon()' harus diimplementasikan di kelas turunan.");
        }
    };

// Interface IHitungPPN
const IHitungPPN = (Base) => 
    class extends Base {
        hitungPPN() {
            throw new Error("Metode 'hitungPPN()' harus diimplementasikan di kelas turunan.");
        }
    };

// Kelas Produk yang mengimplementasikan kedua interface
class Produk extends IHitungDiskon(IHitungPPN(Object)) {
    constructor(nama, hargaPokok) {
        super();
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

// Membuat objek dari kelas Produk
const produk1 = new Produk("Laptop", 15000000);
const produk2 = new Produk("Smartphone", 5000000);

// Menampilkan Info Produk
produk1.infoProduk();
produk2.infoProduk();
