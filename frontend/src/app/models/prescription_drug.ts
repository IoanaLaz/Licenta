export class PrescriptionDrug {
    id: number;
    id_drug: number;
    id_prescription: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, id_drug?: number, id_prescription?: number, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.id_drug = id_drug;
        this.id_prescription = id_prescription;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}