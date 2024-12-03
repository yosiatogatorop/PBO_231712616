// Kelas abstrak untuk pembayaran
class Payment_2616 {
    prosesPembayaran(amount) {
      throw new Error("Method 'prosesPembayaran(amount)' harus diimplementasikan.");
    }
  }
  
  // Kelas abstrak untuk notifikasi
  class Notifikasi_2616 {
    kirimNotifikasi(pesan) {
      throw new Error("Method 'kirimNotifikasi(pesan)' harus diimplementasikan.");
    }
  }
  
  // Kelas untuk pembayaran via Kartu Kredit
  class KartuKredit extends Payment_2616 {
    prosesPembayaran(amount) {
      console.log(`Pembayaran sebesar Rp${amount} menggunakan Kartu Kredit telah berhasil.`);
    }
  }
  
  // Kelas untuk pembayaran via E-Wallet
  class Ewallet extends Payment_2616 {
    prosesPembayaran(amount) {
      console.log(`Pembayaran sebesar Rp${amount} menggunakan E-Wallet telah berhasil.`);
    }
  }
  
  // Kelas untuk pembayaran via Transfer Bank
  class TransferBank extends Payment_2616 {
    prosesPembayaran(amount) {
      console.log(`Pembayaran sebesar Rp${amount} menggunakan Transfer Bank telah berhasil.`);
    }
  }
  
  // Kelas untuk notifikasi via Email
  class NotifEmail extends Notifikasi_2616 {
    kirimNotifikasi(pesan) {
      console.log(`Email terkirim: ${pesan}`);
    }
  }
  
  // Kelas untuk notifikasi via SMS
  class NotifSMS extends Notifikasi_2616 {
    kirimNotifikasi(pesan) {
      console.log(`SMS terkirim: ${pesan}`);
    }
  }
 // Kelas PaymentProcessor
class PaymentProcessor {
    constructor(paymentMethod, notificationMethod) {
      this.paymentMethod = paymentMethod; // Abstrak unruk pembayaran
      this.notificationMethod = notificationMethod; // Abstraction untuk notifikasi
    }
  
    proses(amount) {
      // Memproses pembayaran
      this.paymentMethod.prosesPembayaran(amount);
  
      // Mengirim notifikasi setelah pembayaran berhasil
      this.notificationMethod.kirimNotifikasi(
        `Pembayaran anda sebesar Rp${amount} telah berhasil.`
      );
    }
  }
const kartuKredit = new KartuKredit(); // Pembayaran dengan Kartu Kredit
const notifEmail = new NotifEmail();   // Notifikasi via Email

const processor1 = new PaymentProcessor(kartuKredit, notifEmail); 
processor1.proses(100000); // Proses pembayaran sebesar Rp100,000

const eWallet = new Ewallet(); // Pembayaran dengan E-Wallet
const notifSMS = new NotifSMS(); // Notifikasi via SMS

const processor2 = new PaymentProcessor(eWallet, notifSMS); 
processor2.proses(50000); // Proses pembayaran sebesar Rp50,000