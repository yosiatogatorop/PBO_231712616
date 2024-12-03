// Antarmuka untuk kemampuan terbang
class Terbang {
    terbang() {
      throw new Error("Fungsi 'terbang()' harus diimplementasikan");
    }
  }
  
  // Antarmuka untuk kemampuan berenang
  class Berenang {
    berenang() {
      throw new Error("Fungsi 'berenang()' harus diimplementasikan");
    }
  }
  
  // Antarmuka untuk kemampuan berburu
  class Berburu {
    berburu() {
      throw new Error("Fungsi 'berburu()' harus diimplementasikan");
    }
  }
  
  // Kelas dasar Hewan (tidak langsung mengimplementasikan kemampuan apa pun)
  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    suara() {
      console.log(`${this.nama} membuat suara!`);
    }
  }
  
  // Kelas Burung yang bisa terbang
  class Burung extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Implementasi kemampuan terbang
    terbang() {
      console.log(`${this.nama} sedang terbang!`);
    }
  }
  
  // Kelas Harimau yang bisa berburu
  class Harimau extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Implementasi kemampuan berburu
    berburu() {
      console.log(`${this.nama} sedang berburu!`);
    }
  }
  
  // Kelas Paus yang bisa berenang
  class Paus extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Implementasi kemampuan berenang
    berenang() {
      console.log(`${this.nama} sedang berenang!`);
    }
  }
  
  // Membuat objek burung, harimau, dan paus
  const burung = new Burung("Elang");
  const harimau = new Harimau("Harimau Sumatera");
  const paus = new Paus("Paus Biru");
  
  // Memanggil metode untuk setiap hewan sesuai kemampuannya
  burung.suara(); // Elang membuat suara
  burung.terbang(); // Elang sedang terbang!
  
  harimau.suara(); // Harimau Sumatera membuat suara
  harimau.berburu(); // Harimau Sumatera sedang berburu!
  
  paus.suara(); // Paus Biru membuat suara
  paus.berenang(); // Paus Biru sedang berenang!
  