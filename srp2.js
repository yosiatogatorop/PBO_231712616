// Kelas untuk menangani detail pengiriman dan menghitung biaya pengiriman
class PackageDelivery {
    constructor(id, weight, distance) {
        this.id = id;           // ID paket
        this.weight = weight;    // Berat dalam kg
        this.distance = distance; // Jarak dalam km
    }

    calculate() {
        const baseRate = 1500; // Tarif dasar per kg per km
        return this.weight * this.distance * baseRate;
    }
}

// Kelas untuk menangani pencetakan label pengiriman
class PackageDeliveryPrinter {
    print(item) {
        const cost = item.calculate();
        console.log(`Mencetak label pengiriman:
        ID Paket: ${item.id}
        Berat: ${item.weight} kg
        Jarak: ${item.distance} km
        Harga: Rp.${cost}`);
    }
}

// Kelas untuk menyimpan data pengiriman ke dalam database
class PackageDeliveryDatabase {
    save(item) {
        console.log(`Menyimpan paket dengan id ${item.id} ke dalam database pengiriman...`);
    }
}

// Contoh penggunaan
console.log('SRP2_C_12616'); // Isi dengan nama dan 5 digit npm (contoh: SRP1_D_11836)

// Membuat objek 
const packagel = new PackageDelivery('C_12616', 10, 10);
const printer = new PackageDeliveryPrinter();
const saver = new PackageDeliveryDatabase();

// Mencetak label dan menyimpan data pengiriman
printer.print(packagel);
saver.save(packagel);
