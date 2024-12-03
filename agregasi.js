// Kelas MataPelajaran
class MataPelajaran {
    constructor(nama) {
        this.nama = nama;
    }
}

// Kelas Guru
class Guru {
    constructor(namaGuru) {
        this.namaGuru = namaGuru;
        this.mataPelajaran = [];
    }

    // Metode untuk menambahkan MataPelajaran
    tambahkanMataPelajaran(mataPelajaran) {
        this.mataPelajaran.push(mataPelajaran);
    }

    // Metode untuk menampilkan info Guru dan MataPelajaran yang diajarkan
    tampilkanInfo() {
        console.log(`Guru: ${this.namaGuru}`);
        console.log("Mata Pelajaran yang diajarkan:");
        this.mataPelajaran.forEach(mp => console.log(`- ${mp.nama}`));
    }
}

// Kelas Sekolah
class Sekolah {
    constructor(namaSekolah) {
        this.namaSekolah = namaSekolah;
        this.daftarGuru = [];
    }

    // Metode untuk menambahkan Guru
    tambahkanGuru(guru) {
        this.daftarGuru.push(guru);
    }

    // Metode untuk menampilkan daftar Guru dan MataPelajaran yang diajarkan
    tampilkanDaftarGuru() {
        console.log(`Sekolah: ${this.namaSekolah}`);
        this.daftarGuru.forEach(guru => guru.tampilkanInfo());
    }
}

// Membuat Objek Sekolah, Guru, dan MataPelajaran
const sekolah1 = new Sekolah("SMA BINTANG TIMUR");
const guru1 = new Guru("Pak MT");
const guru2 = new Guru("Pak JS");

const mp1 = new MataPelajaran("Matematika");
const mp2 = new MataPelajaran("Fisika");
const mp3 = new MataPelajaran("Kimia");
const mp4 = new MataPelajaran("Biologi");

// Menambahkan MataPelajaran ke masing-masing Guru
guru1.tambahkanMataPelajaran(mp1);
guru1.tambahkanMataPelajaran(mp2);
guru2.tambahkanMataPelajaran(mp3);
guru2.tambahkanMataPelajaran(mp4);

// Menambahkan Guru ke Sekolah
sekolah1.tambahkanGuru(guru1);
sekolah1.tambahkanGuru(guru2);

// Menampilkan Daftar Guru dan MataPelajaran yang diajarkan
sekolah1.tampilkanDaftarGuru();
