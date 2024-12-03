// Kelas induk Transportasi
class Transportasi {
    mode() {
      console.log("Modus transportasi umum.");
    }
  }
  
  // Subclass Mobil yang mengoverride metode mode
  class Mobil extends Transportasi {
    mode() {
      console.log("Mobil bergerak di jalan.");
    }
  }
  
  // Subclass Kereta yang mengoverride metode mode
  class Kereta extends Transportasi {
    mode() {
      console.log("Kereta bergerak di rel.");
    }
  }
  
  // Subclass Pesawat yang mengoverride metode mode
  class Pesawat extends Transportasi {
    mode() {
      console.log("Pesawat terbang di udara.");
    }
  }
  
  // Fungsi untuk menampilkan mode transportasi
  function tampilkanModeTransportasi(transportasi) {
    transportasi.mode();
  }
  
  // Membuat objek dari masing-masing subclass
  const mobil = new Mobil();
  const kereta = new Kereta();
  const pesawat = new Pesawat();
  
  // Memanggil metode mode untuk masing-masing objek
  tampilkanModeTransportasi(mobil);   // Output: Mobil bergerak di jalan.
  tampilkanModeTransportasi(kereta);  // Output: Kereta bergerak di rel.
  tampilkanModeTransportasi(pesawat); // Output: Pesawat terbang di udara.
  