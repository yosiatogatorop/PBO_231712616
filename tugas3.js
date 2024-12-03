class Kendaraan {
    bergerak() {
    console.log(" Kendaraan ini sedang bergerak. ");
    }
    berhenti() {
    console.log(" Kendaraaan ini berhenti. ");
    }
}
class Mobil extends Kendaraan {
    bergerak() { 
    console.log("Mobil ini melaju dengan kecepatan tinggi!");
    }
    hidupkanMesin () {
    console.log("Mesin mobil dihidupkan.");
    }
    berhenti () {
    console.log("Kendaraan ini berhenti.")
    }
}
class Sepeda extends Kendaraan {
    bergerak() { 
    console.log("Sepeda ini dipedal dengan santai.");
    }
    gantiGear () {
    console.log("Gear sepeda diubah.");
    }
    berhenti () {
    console.log("Kendaraan ini berhenti.")
    }
}
const kendaraan = new Kendaraan();
const mobil = new Mobil();
const sepeda = new Sepeda();

kendaraan.bergerak();
kendaraan.berhenti();
console.log("===============================");
mobil.bergerak();
mobil.hidupkanMesin();
mobil.berhenti();
console.log("===============================")
sepeda.bergerak();
sepeda.gantiGear();
sepeda.berhenti();