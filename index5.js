class Novel extends Buku {
    #genre;

    constructor(harga, nama, penulis, genre) {
        super(harga, nama, penulis);
        this.#genre = genre;
    }

    informasiGenre() {
        console.log(`Novel "${this.publicPenulis}" adalah genre ${this.#genre}.`);
    }
}

class Ensiklopedia extends Buku {
    #topik;

    constructor(harga, nama, penulis, topik) {
        super(harga, nama, penulis);
        this.#topik = topik;
    }

    informasiTopik() {
        console.log(`Ensiklopedia "${this.publicPenulis}" membahas topik: ${this.#topik}.`);
    }
}
