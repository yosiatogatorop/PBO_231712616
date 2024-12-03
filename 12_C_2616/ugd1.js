// Singleton: ConnectionManager
class ConnectionManager {
    constructor() {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance; // Return the existing instance
        }

        this.connections = []; // Store all database connections
        ConnectionManager.instance = this; // Save the instance
    }

    createConnection(type, host) {
        const database = DatabaseFactory.createDatabase(type, host);
        this.connections.push(database); // Store the created database connection
    }

    getConnections() {
        return this.connections; // Return all connections
    }
}

// Factory: DatabaseFactory
class DatabaseFactory {
    static createDatabase(type, host) {
        if (type === "MySQL") {
            return new MySQL(host);
        } else if (type === "PostgreSQL") {
            return new PostgreSQL(host);
        } else {
            throw new Error(`Unsupported database type: ${type}`);
        }
    }
}

// Database: MySQL and PostgreSQL classes
class MySQL {
    constructor(host) {
        this.type = "MySQL";
        this.host = host;
    }

    connect() {
        console.log(`Connected to MySQL database at ${this.host}`);
    }
}

class PostgreSQL {
    constructor(host) {
        this.type = "PostgreSQL";
        this.host = host;
    }

    connect() {
        console.log(`Connected to PostgreSQL database at ${this.host}`);
    }
}

// Testing the implementation
const manager = new ConnectionManager();

// Create database connections
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

// Retrieve all connections and connect them
const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

// Log all connections
console.log(connections);
