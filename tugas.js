// Kelas Induk (Parent Class)
class Hewan {
    suara() {
    console.log("Hewan ini sedang bersuara.");
    }
    berjalan() {
    console.log("Hewan ini berjalan.");
    }
}

class Burung extends Hewan {
    suara() { 
    console. log("Burung sedang bersuara: Cuit cuit!");
    }
    terbang () {
    console.log("Burung ini terbang!");
    }
}

class Bebek extends Hewan {
    suara() {
        console.log("Bebek sedang bersuara: Kwek kwek!")
    }
    berenang(){
        console.log("Bebek ini berenang!")
    }
}

const hewan = new Hewan();
const burung = new Burung();
const bebek = new Bebek();

hewan.suara();
hewan.berjalan();
console.log("==================================");
burung.suara();
burung.berjalan();
burung.terbang();
console.log("==================================")
bebek.suara();
bebek.berenang();