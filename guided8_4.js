// Kelas Hewan
class Hewan {
    suara() {
      throw new Error("Method 'suara()' harus diimplementasikan.");
    }
  
    lari() {
      throw new Error("Method 'lari()' harus diimplementasikan.");
    }
  }
  
  // Kelas Anjing
  class Anjing extends Hewan {
    suara() {
      console.log("Anjing menggonggong: Woof woof!");
    }
  
    lari() {
      console.log("Hewan ini berlari dengan kecepatan 20 km/jam");
    }
  }
  
  // Kelas Kucing
  class Kucing extends Hewan {
    suara() {
      console.log("Kucing mengiau: Meow meow!");
    }
  
    lari() {
      console.log("Hewan ini berlari dengan kecepatan 15 km/jam");
    }
  }
  
  // Kelas Burung
  class Burung extends Hewan {
    suara() {
      console.log("Burung berkicau: Tweet tweet!");
    }
  
    lari() {
    }
  
    terbang() {
      console.log("Hewan ini sedang terbang dengan kecepatan 100 km/jam");
    }
  }
  
  // Fungsi untuk menampilkan informasi hewan
  function tampilkanInfoHewan(hewan) {
    hewan.suara();
    hewan.lari();
    // Pengecekan apakah hewan adalah Burung
    if (hewan instanceof Burung) {
      hewan.terbang();
    }
  }
  
  // Membuat objek dengan nama objek + NPM 2616
  const anjing_2616 = new Anjing();
  const kucing_2616 = new Kucing();
  const burung_2616 = new Burung();
  
  // Memanggil fungsi tampilkanInfoHewan
  tampilkanInfoHewan(anjing_2616);
  tampilkanInfoHewan(kucing_2616);
  tampilkanInfoHewan(burung_2616);
  