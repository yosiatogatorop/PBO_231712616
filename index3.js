class Buku {
    #harga;
    #nama;

    constructor(harga, nama) {
        this.#harga = harga;
        this.#nama = nama;
    }

    informasiBuku() {
        console.log(`Buku: ${this.#nama}, Harga: Rp${this.#harga}`);
    }

    diskon(persentase) {
        const jumlahDiskon = this.#harga * (persentase / 100);
        return this.#harga - jumlahDiskon;
    }
}
