
export class InMemoryDataService {
    createDb() {
        const products = [
            { id: 1, productName: "ProductA" },
            { id: 2, productName: "ProductB" }
        ];
        const customers = [
            { id: 1, firstName: "Marko", lastName: "Dragojlovic" },
            { id: 2, firstName: "Mihajlo", lastName: "Dragojlovic" },
            { id: 3, firstName: "Suzana", lastName: "Dragojlovic" },
            { id: 4, firstName: "Borko", lastName: "Dragojlovic" }
        ];
        const db = { products, customers };
        return db;
    }
}