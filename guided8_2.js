// Definisi objek ayah dengan method bekerja
const ayah = {
    bekerja: function() {
      console.log("Ayah sedang bekerja di Kantor.");
    }
  };
  
  // Definisi objek ibu dengan method bekerja dan memasak
  const ibu = {
    bekerja: function() {
      console.log("Ibu sedang menjahit.");
    },
    memasak: function() {
      console.log("Ibu sedang memasak spaghetti Aglio e Olio.");
    }
  };
  
  // Fungsi untuk memanggil perilaku objek berdasarkan method
  function doTugas(objek) {
    if (objek.bekerja) {
      objek.bekerja();
    } else if (objek.memasak) {
      objek.memasak();
    } else {
      console.log("Perilaku tidak dikenali.");
    }
  }
  
  // Memanggil fungsi doTugas untuk setiap objek
  doTugas(ayah); // Output: Ayah sedang bekerja di Kantor.
  doTugas(ibu);  // Output: Ibu sedang menjahit.
  
  // Contoh menambahkan objek lain yang tidak memiliki method yang sesuai
  const anak = {};
  doTugas(anak); // Output: Perilaku tidak dikenali.