export class Prescription {
    id: number;
    date: Date;
    id_doctor: number;
    id_patient: number;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, date?: Date, id_doctor?: number, id_patient?: number, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.date = date;
        this.id_doctor = id_doctor;
        this.id_patient = id_patient;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}
