// Kelas Memori
class Memori {
    constructor(jenis, kapasitas) {
        this.jenis = jenis;
        this.kapasitas = kapasitas;
    }
}

// Kelas Komputer
class Komputer {
    constructor(merk, jenisMemori, kapasitasMemori) {
        this.merk = merk;
        // Membuat objek Memori sebagai bagian dari Komputer (Komposisi)
        this.memori = new Memori(jenisMemori, kapasitasMemori);
    }

    // Metode untuk menampilkan spesifikasi Komputer
    tampilkanSpesifikasi() {
        console.log(`Komputer Merk: ${this.merk}`);
        console.log(`Jenis Memori: ${this.memori.jenis}, Kapasitas: ${this.memori.kapasitas}`);
    }
}

// Membuat objek Komputer
const komputer1 = new Komputer("Dell", "DDR4", "16GB");
komputer1.tampilkanSpesifikasi();
