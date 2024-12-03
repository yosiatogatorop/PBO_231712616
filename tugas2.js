class Hitung {
    tambahOverload(...args) {
        var tambah1 = function (a, b) {
            return a + b;
        };
        var tambah2 = function (a, b, c) {
            return a + b + c;
        };
        var tambah3 = function (a, b, c, d)  {
            return a + b + c + d;
        };

        if (args.length === 2) {
            return tambah1(args[0], args[1]);
        } else if (args.length === 3) {
            return tambah2(args[0], args[1], args[2]);
        } else if (args.length === 4) {
            return tambah3(args[0], args[1], args[2], args[3]); 
        }
    }
}

const hitung1 = new Hitung();
console.log(hitung1.tambahOverload(2, 3));
console.log(hitung1.tambahOverload(2, 3, 4));
console.log(hitung1.tambahOverload(2, 3, 4, 5));

class DataHandler {
    processData(data) {
        if (typeof data === "string") {
            return this.processString(data);
        } else if (Array.isArray(data)) {
            return this.processArray(data);
        } else if (typeof data === "object") {
            return this.processObject(data);
        } else {
            throw new Error("Tipe data tidak didukung.");
        }
    }

    processString(str) {
        return `Data string: ${str}`;
    }

    processArray(arr) {
       return `Data array: ${arr.join(", ")}`; 
    }

    processObject(obj) {
         const keys = Object.keys(obj);
         return `Data objek: ${keys.map((key) => `${key}: ${obj[key]}`).join(", ")}`;
    }
}

const dataHandler = new DataHandler();

console.log(dataHandler.processData("Hello, world"));
console.log(dataHandler.processData([1, 2, 3, 4, 5]));
console.log(dataHandler.processData({ name: "John", age: 30, city: "New York"}));