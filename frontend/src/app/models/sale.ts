export class Sale {  
    id: number;
    id_drug: number;
    id_prescription: number;
    quantity: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?:number, id_drug?:number, id_prescription?:number, quantity?:number, createdAt?:String, updatedAt?: String) {
         this.id = id;
         this.id_drug = id_drug;
         this.id_prescription=id_prescription;
         this.quantity = quantity;
         this.createdAt = createdAt;
         this.updatedAt = updatedAt;
     }
   
}