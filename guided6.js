class Perpustakaan {
    pinjamBuku(...args) {
      var pinjam1 = function (judul, namaPeminjam) {
        return console.log(`${namaPeminjam} meminjam buku "${judul}".`);
      };
      var pinjam2 = function (judul, namaPeminjam, tanggal) {
        return console.log(`${namaPeminjam} meminjam buku "${judul}" pada tanggal ${tanggal}.`);
      };
      var pinjam3 = function (judul, namaPeminjam, tanggal, durasi) {
        return console.log(`${namaPeminjam} meminjam buku "${judul}" pada tanggal ${tanggal} untuk ${durasi} hari.`);
      };
  
      if (args.length === 2) {
        return pinjam1(args[0], args[1]);
      } else if (args.length === 3) {
        return pinjam2(args[0], args[1], args[2]);
      } else if (args.length === 4) {
        return pinjam3(args[0], args[1], args[2], args[3]);
      }
    }
  }
  
  const perpustakaan = new Perpustakaan();
  perpustakaan.pinjamBuku("Harry Potter", "Anita"); // Output: Anita meminjam buku "Harry Potter".
  perpustakaan.pinjamBuku("Pangeran Kecil", "Budi", "10 Agustus"); // Output: Budi meminjam buku "Pangeran Kecil" pada tanggal 10 Agustus.
  perpustakaan.pinjamBuku("Pangeran Kecil", "Budi", "10 Agustus", 7); // Output: Budi meminjam buku "Pangeran Kecil" pada tanggal 10 Agustus untuk 7 hari.
  