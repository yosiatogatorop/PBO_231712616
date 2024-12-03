class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
        // Math.PI adalah metode bawaan JavaScript yang digunakan
        // untuk memanggil nilai PHI = 3.14159.
    }
}

class Cube {
    constructor(side) {
        this.side = side;
    }

    calculateVolume() {
        return Math.pow(this.side, 3);
        // Math.pow adalah metode bawaan JavaScript yang digunakan
        // untuk menghitung suatu bilangan berpangkat (exponentiation).
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return (Math.PI * this.radius * this.radius * this.height) / 3;
    }
}

// Membuat objek dengan array
const threeDimensionalShapes = [
    new Sphere(5),     // Bola dengan radius 5
    new Cube(4),       // Kubus dengan panjang sisi 4
    new Cone(3, 7)     // Kerucut dengan radius 3 dan tinggi 7
];

console.log('OCP1_kelas_npm'); // isi dengan nama dan 5 digit npm (contoh: SRP1_D_11836)

// Mencetak volume setiap bentuk (objek)
threeDimensionalShapes.forEach(shape => console.log(`Volume: ${shape.calculateVolume()}`));
