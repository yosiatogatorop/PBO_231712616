const IHitungLuas = (Base) =>
    class extends Base {
        luas() {
            throw new Error(
                "Metode 'luas()' harus diimplementasikan di kelas turunan."
            );
        }
    };
const IHitungKeliling = (Base) =>
    class extends Base {
        keliliing() {
            throw new Error(
                "Metode 'keliling()' harus diimplementasikan di kelas turunan."
            );
        }
    };

class Persegi extends IHitungKeliling(IHitungLuas(Object)) {
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


class Segitiga extends IHitungKeliling(IHitungLuas(Object)) {
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

const persegi = new Persegi(5)
console.log("Luas persegi:", persegi.luas());
console.log("Keliling persegi:", persegi.keliling());

const segitiga1 = new Segitiga(2616, 2616, 2616, 2616, 2616);
console.log("Luas segitiga:", segitiga1.luas());
console.log("Keliling segitiga:", segitiga1.keliling());