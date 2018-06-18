export class Substance {
    id: number;
    substance_name: String;
    harmful_substance: String;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, substance_name?: String, harmful_substance?: String, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.substance_name = substance_name;
        this.harmful_substance = harmful_substance;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}
