// Nama: Yosia Agnesa Togatorop
// NPM : 231712616

class Food {
    constructor(name) {
      this.name = name;
    }
  
    serve() {
      console.log(`Makanan ${this.name} disajikan.`);
    }
  }
  
  class Pizza extends Food {
    constructor() {
      super("Pizza");
    }
  
    serve() {
      console.log("Pizza disajikan dengan saus tomat.");
    }
  }
  
  class Burger extends Food {
    constructor() {
      super("Burger");
    }
  
    serve() {
      console.log("Burger disajikan dengan kentang goreng.");
    }
  }
  
  class FoodFactory {
    createFood(type) {
      if (type === "Pizza") {
        return new Pizza();
      } else if (type === "Burger") {
        return new Burger();
      } else {
        console.log("Jenis makanan tidak tersedia.");
        return null;
      }
    }
  }
  
  // Contoh penggunaan
  const factory = new FoodFactory();
  
  const pizza = factory.createFood("Pizza");
  if (pizza) pizza.serve();
  
  const burger = factory.createFood("Burger");
  if (burger) burger.serve();
  
  const unknown = factory.createFood("Pasta"); // Jenis makanan tidak tersedia
  if (unknown) unknown.serve();
  