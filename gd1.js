// Nama: Yosia Agnesa Togatorop
// NPM : 231712616

class Logger {
    constructor() {
      if (!Logger.instance) {
        Logger.instance = this; // Membuat instance Singleton
        this.logs = []; // Menyimpan semua pesan log
      }
      return Logger.instance;
    }
  
    // Metode untuk mencatat pesan log
    log(message) {
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] ${message}`);
    }
  
    // Metode untuk mengembalikan semua log
    getLogs() {
      return this.logs;
    }
  }
  
  // Menguji implementasi Singleton
  const logger1 = new Logger();
  logger1.log("Aplikasi dimulai");
  
  const logger2 = new Logger();
  logger2.log("Pengguna login");
  
  console.log(logger1 === logger2); // Output: true (logger1 dan logger2 adalah instance yang sama)
  console.log(logger1.getLogs());  // Output: Semua log yang tercatat
  