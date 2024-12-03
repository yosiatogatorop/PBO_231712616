// Kelas induk Atlet
class Atlet {
    latihan() {
      console.log("Atlet sedang berlatih.");
    }
  }
  
  // Subclass Pelari yang mengoverride metode latihan
  class Pelari extends Atlet {
    latihan() {
      console.log("Pelari sedang berlatih lari jarak jauh.");
    }
  }
  
  // Subclass Perenang yang mengoverride metode latihan
  class Perenang extends Atlet {
    latihan() {
      console.log("Perenang sedang berlatih gaya bebas.");
    }
  }
  
  // Fungsi yang menggunakan runtime polymorphism
  function panggilLatihanAtlet(atlet) {
    atlet.latihan();
  }
  
  // Membuat objek dari kelas Pelari dan Perenang
  const pelari = new Pelari();
  const perenang = new Perenang();
  
  // Memanggil metode latihan untuk masing-masing objek
  panggilLatihanAtlet(pelari);   // Output: Pelari sedang berlatih lari jarak jauh.
  panggilLatihanAtlet(perenang); // Output: Perenang sedang berlatih gaya bebas.
  