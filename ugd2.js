// Factory: OrderFactory
class OrderFactory {
    createOrder(type, orderId, details) {
        if (type === "DineIn") {
            return new DineInOrder(orderId, details);
        } else if (type === "TakeAway") {
            return new TakeAwayOrder(orderId, details);
        } else {
            throw new Error(`Unsupported order type: ${type}`);
        }
    }
}

// Pesanan DineIn
class DineInOrder {
    constructor(orderId, { table, items }) {
        this.type = "DineIn";
        this.orderId = orderId;
        this.details = { table, items };
    }
}

// Pesanan TakeAway
class TakeAwayOrder {
    constructor(orderId, { customerName, items }) {
        this.type = "TakeAway";
        this.orderId = orderId;
        this.details = { customerName, items };
    }
}

// Observer: Chef
class Chef {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} received order: ${JSON.stringify(order)}`);
    }
}

// Observer: Cashier
class Cashier {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} received payment details for order: ${JSON.stringify(order)}`);
    }
}

// Subject: OrderManager
class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(order) {
        this.observers.forEach(observer => observer.notify(order));
    }

    createOrder(order) {
        this.orders.push(order);
        this.notifyObservers(order);
    }

    getOrders() {
        return this.orders;
    }
}

// Testing Implementation
const factory = new OrderFactory();
const manager = new OrderManager();

// Add observers
const chef = new Chef("Chef Yosia\n");
const cashier = new Cashier("Cashier Lisa\n");

manager.addObserver(chef);
manager.addObserver(cashier);

// Create orders using factory
const order1 = factory.createOrder("DineIn", "001", {
    table: 5,
    items: ["Pasta", "Salad"],
});

const order2 = factory.createOrder("TakeAway", "002", {
    customerName: "John",
    items: ["Burger"],
});

// Process orders
manager.createOrder(order1);
manager.createOrder(order2);

// Display all orders
const orders = manager.getOrders();
console.log(orders);
