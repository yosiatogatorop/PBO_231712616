// Kelas Induk
class Buku {
    #harga;
    #nama;

    constructor(harga, nama) {
        this.#harga = harga;
        this.#nama = nama;
    }

    informasiBuku() {
        console.log(`Buku: ${this.#nama}, Harga: Rp${this.#harga}`);
    }

    diskon(persentase) {
        const jumlahDiskon = this.#harga * (persentase / 100);
        return this.#harga - jumlahDiskon;
    }
}

// Kelas Cucu 1
class Novel extends Buku {
    #genre;

    constructor(harga, nama, genre) {
        super(harga, nama);
        this.#genre = genre;
    }

    informasiGenre() {
        console.log(`Novel "${this.nama}" adalah genre ${this.#genre}.`);
    }
}

// Kelas Cucu 2
class Ensiklopedia extends Buku {
    #topik;

    constructor(harga, nama, topik) {
        super(harga, nama);
        this.#topik = topik;
    }

    informasiTopik() {
        console.log(`Ensiklopedia "${this.nama}" membahas topik: ${this.#topik}.`);
    }
}

// Membuat objek dari kelas Cucu
const Novel = new Novel(100000, "Laskar Pelangi", "Fiksi");
const ensiklopedia1 = new Ensiklopedia(200000, "Ensiklopedia Umum", "Ilmu Pengetahuan");

// Memanggil semua fungsi secara berurutan
console.log("Informasi Novel:");
novel1.informasiBuku();         // Fungsi dari kelas Induk
novel1.informasiGenre();        // Fungsi dari kelas Cucu

console.log("\nInformasi Ensiklopedia:");
ensiklopedia1.informasiBuku(); // Fungsi dari kelas Induk
ensiklopedia1.informasiTopik(); // Fungsi dari kelas Cucu

// Membuat objek dari kelas Cucu
const novel1 = new Novel(100000, "Laskar Pelangi", "Fiksi");

// Memanggil atribut kelas Induk melalui objek Cucu
console.log(`Nama buku: ${novel1.nama}`);  // Mengakses atribut nama
console.log(`Harga buku: Rp${novel1.harga}`); // Mengakses atribut harga

// Memanggil fungsi dari kelas Cucu
novel1.informasiBuku();   // Fungsi dari kelas Induk
novel1.informasiGenre();   // Fungsi dari kelas Cucu

// Membuat objek dari kelas Cucu
const novel = new Novel(100000, "Laskar Pelangi", "Fiksi");

// Memanggil atribut kelas Anak melalui objek Cucu
console.log(`Genre buku: ${novel1.genre}`); // Mengakses atribut genre

// Memanggil fungsi dari kelas Cucu
novel1.informasiBuku();   // Fungsi dari kelas Induk
novel1.informasiGenre();   // Fungsi dari kelas Cucu