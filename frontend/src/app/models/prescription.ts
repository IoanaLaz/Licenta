export class Prescription {  
    id: number;
    id_client: number;
    id_drug: number;
    hander: String;
    diagnostic: String;
    prescription_type: String;
    release_date: Date;
    dosage: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number,id_client?: number,id_drug?: number,hander?: String,diagnostic?: String,prescription_type?: String,release_date?: Date,dosage?: number,createdAt?: String,updatedAt?: String) {
         this.id = id;
         this.id_client = id_client;
         this.id_drug=id_drug;
         this.hander = hander;
         this.diagnostic=diagnostic;
         this.prescription_type=prescription_type;
         this.release_date=release_date;
         this.createdAt = createdAt;
         this.updatedAt = updatedAt;
     }
    
}