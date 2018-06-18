export class Drug {
    id: number;
    name: String;
    producer: String;
    amount: number;
    price: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, name?: String, producer?: String, amount?: number, price?: number, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        this.amount = amount;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}
