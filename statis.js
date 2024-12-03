class MathHelper {
    static PHI = 3.14;

    static kelilingLingkaran(radius) {
        return 2 * this.PHI * radius;
    }

    static luasLingkaran(radius) {
        return this.PHI * radius * radius;
    }

    static luasPermukaanTabung(radius, tinggi) {
        return 2 * this.PHI * radius * (radius + tinggi);
    }

    static volumeTabung(radius, tinggi) {
        return this.PHI * radius * radius * tinggi;
    }
}

// Example usage
console.log(`Keliling Lingkaran : ${MathHelper.kelilingLingkaran(7)}`);
console.log(`Luas Lingkaran : ${MathHelper.luasLingkaran(7)}`);
console.log(`Luas Permukaan Tabung : ${MathHelper.luasPermukaanTabung(7, 10)}`);
console.log(`Volume Tabung : ${MathHelper.volumeTabung(7, 10)}`);
