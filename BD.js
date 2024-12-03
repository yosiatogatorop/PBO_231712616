class IBangunDatar {
    luas() {
        throw new Error("Metode luas() harus diimplemtasikan.");
    }
    keliling() {
        throw new Error("Metode keliling() harus diimplemtasikan.");
    }
}

class Persegi extends IBangunDatar{
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }
    luas() {
        return this.sisi * this.sisi;
    }
    keliling() {
        return 4 * this.sisi;
    }
}

class Segitiga extends IBangunDatar {
    constructor(alas, tinggi, sisiA, sisiB, sisiC) {
        super();
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiA = sisiA;
        this.sisiB = sisiB;
        this.sisiC = sisiC;
    }
    luas() {
        return (this.alas * this.tinggi) / 2;
    }
    keliling() {
        return this.sisiA + this.sisiB + this.sisiC;
    }
}

const persegi1 = new Persegi(5);
console.log("Luas persegi:", persegi1.luas());
console.log("Keliling persegi;", persegi1.keliling());

const segitiga1 = new Segitiga(2616, 2616, 2616, 2616, 2616);
console.log("Luas segitiga:", segitiga1.luas());
console.log("Keliling segitiga:", segitiga1.keliling());