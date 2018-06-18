export class DrugSubstance {
    id: number;
    id_substance: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, id_substance?: number, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.id_substance = id_substance;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}
