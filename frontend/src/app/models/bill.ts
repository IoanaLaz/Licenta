export class Bill {
    id: number;
    id_sale: number;
    sale_date: Date;
    payment: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?:number, id_sale?:number,sale_date?: Date,payment?:number, createdAt?:String, updateAt?:String) {
         this.id = id;
         this.id_sale = id_sale;
         this.sale_date=sale_date;
         this.payment = payment;
         this.createdAt = createdAt;
         this.updatedAt = updateAt;
     }
  
}