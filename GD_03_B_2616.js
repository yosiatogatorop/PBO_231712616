class Produk {
    #nama;
    constructor(nama, jumlah) {
        this.#nama = nama;
        this.jumlah = jumlah;
    }
    informasi() {
        console.log(`Produk ${this.#nama} ada sebanyak ${this.jumlah} pcs.`);
    }
    getterNama() {
        return this.nama;
    }
}

class Makanan extends Produk { 
    #expired;
    constructor(expired, nama, jumlah) {
        super(nama, jumlah);
        this.#expired = expired;
    }
    waktuRusak() {
        console.log(`${this.nama} akan rusak pada tanggal ${this.#expired}`);
    }
}

const burger = new Makanan("25 September 2024", "BigMac", 1);
burger.informasi();
burger.waktuRusak();
console.log("Makanan ini bernama " + burger.getterNama());

class Minuman extends Produk {
    #volume;
    constructor(volume, nama, jumlah) {
        super(nama, jumlah);
        this.#volume = volume;
    }
    tampilkanVolume() {
        console.log(`${this.nama} memiliki volume sebanyak ${this.#volume} ml.`);
    }
}


const cola = new Minuman(500, "Coca-Cola", 3);
cola.informasi();
cola.tampilkanVolume();
console.log("Minuman ini bernama " + cola.getterNama());
