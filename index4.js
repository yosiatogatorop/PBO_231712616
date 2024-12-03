class Buku extends Produk {
    publicPenulis;

    constructor(harga, nama, penulis) {
        super(harga, nama);
        this.publicPenulis = penulis;
    }

    informasiPenulis() {
        console.log(`Buku ini ditulis oleh: ${this.publicPenulis}`);
    }
}

class Sepatu extends Produk {
    publicTipe;

    constructor(harga, nama, tipe) {
        super(harga, nama);
        this.publicTipe = tipe;
    }

    informasiTipe() {
        console.log(`Tipe sepatu: ${this.publicTipe}`);
    }
}
