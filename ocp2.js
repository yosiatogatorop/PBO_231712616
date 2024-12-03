    // Kelas dasar yang bersifat abstrak untuk semua bentuk 3D
class Shape3D {
    calculateVolume() {
        throw new Error("calculateVolume() harus diimplementasikan oleh kelas turunan");
    }
}

// Kelas untuk bola (Sphere)
class Sphere extends Shape3D {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
}

// Kelas untuk kubus (Cube)
class Cube extends Shape3D {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateVolume() {
        return Math.pow(this.side, 3);
    }
}

// Kelas untuk kerucut (Cone)
class Cone extends Shape3D {
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
    }
}

// Kelas baru untuk bangun ruang 3D lainnya, misalnya Silinder (Cylinder)
class Cylinder extends Shape3D {
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}


console.log('OCP2_C_12616'); // Isi dengan nama dan 5 digit npm (contoh: OCP1_D_11836)

// Membuat objek dengan array
const threeDimensionalShapes = [
    new Sphere(5),     // Bola dengan radius 5
    new Cube(4),       // Kubus dengan panjang sisi 4
    new Cone(3, 7),    // Kerucut dengan radius 3 dan tinggi 7
    new Cylinder(3, 10) // Silinder dengan radius 3 dan tinggi 10
];


// Mencetak volume setiap bentuk (objek) tanpa mengubah implementasi `Shape3D`
threeDimensionalShapes.forEach(shape => console.log(`Volume: ${shape.calculateVolume()}`));
