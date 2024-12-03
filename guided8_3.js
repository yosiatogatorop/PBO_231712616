class Kendaraan {
    constructor(merk, model) {
      this.merk = merk;
      this.model = model;
    }
  
    getDeskripsi() {
      throw new Error("Method getDeskripsi() harus diimplementasikan");
    }
  }
  
  // Subclass Mobil
  class Mobil extends Kendaraan {
    constructor(merk, model, jumlahPintu) {
      super(merk, model); // memanggil constructor superclass
      this.jumlahPintu = jumlahPintu;
    }
  
    getDeskripsi() {
      return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
    }
  }
  
  // Subclass Motor
  class Motor extends Kendaraan {
    constructor(merk, model, tipe) {
      super(merk, model); // memanggil constructor superclass
      this.tipe = tipe;
    }
  
    getDeskripsi() {
      return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
    }
  }
  
  // Fungsi untuk mendeskripsikan kendaraan
  function deskripsikanKendaraan(kendaraan) {
    console.log(kendaraan.getDeskripsi());
  }
  
  // Contoh penggunaan
  const mobil2616 = new Mobil("Toyota_2616", "Camry", 4);
  const motor2616 = new Motor("Yamaha_2616", "R15", "Sport");
  
  // Memanggil deskripsi
  deskripsikanKendaraan(mobil2616); // Output: Mobil Toyota_2616 Camry dengan 4 pintu.
  deskripsikanKendaraan(motor2616); // Output: Motor Yamaha_2616 R15 tipe Sport.
  