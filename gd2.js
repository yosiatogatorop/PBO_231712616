// Nama: Yosia Agnesa Togatorop
// NPM : 231712616

class WeatherStation {
    constructor() {
      this.devices = []; // Daftar perangkat yang berlangganan
      this.temperature = 0; // Suhu awal
    }
  
    // Tambahkan perangkat ke daftar
    addDevice(device) {
      this.devices.push(device);
    }
  
    // Hapus perangkat dari daftar
    removeDevice(device) {
      this.devices = this.devices.filter(d => d !== device);
    }
  
    // Perbarui suhu dan beri tahu semua perangkat
    updateTemperature(temp) {
      this.temperature = temp;
      this.devices.forEach(device => device.notify(temp));
    }
  }
  
  class Device {
    constructor(name) {
      this.name = name;
    }
  
    // Memberi tahu perangkat tentang suhu baru
    notify(temp) {
      console.log(`${this.name} menerima suhu baru: ${temp}`);
    }
  }
  
  // Contoh Penggunaan
  const station = new WeatherStation();
  
  const phone = new Device("Phone");
  const tablet = new Device("Tablet");
  
  station.addDevice(phone);
  station.addDevice(tablet);
  
  station.updateTemperature(25); // Semua perangkat menerima suhu 25
  station.removeDevice(phone);   // Hapus "Phone" dari daftar
  station.updateTemperature(30); // Hanya "Tablet" yang menerima suhu 30
  