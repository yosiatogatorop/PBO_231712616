class PackageDelivery {
    constructor(id, weight, distance) {
        this.id = id;          // id paket
        this.weight = weight;   // dalam kg
        this.distance = distance; // dalam km
    }

    calculateDeliveryCost() {
        const baseRate = 1500; // pengali harga
        return this.weight * this.distance * baseRate;
    }

    printDeliveryLabel() {
        const cost = this.calculateDeliveryCost();
        console.log(`Mencetak label pengiriman:
        Berat ${this.weight} kg
        Jarak ${this.distance} km
        Harga Rp.${cost}`);
    }

    saveToDeliveryDatabase() {
        console.log(`Menyimpan paket dengan id ${this.id} ke dalam database pengiriman...`);
    }
}

console.log('SRP1_C_12616'); // isi dengan nama dan 5 digit npm (contoh: SRP1_D_11836)

// Membuat Objek
const package1 = new PackageDelivery('C_12616', 10, 10); // isi dengan kelas dan 5 digit npm (contoh: D_11836)

// Mencetak label dan menyimpan data pengiriman
package1.printDeliveryLabel();
package1.saveToDeliveryDatabase();
