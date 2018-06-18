export class Doctor {
    id: number;
    name: String;
    birthday: Date;
    specialization: String;
    username: String;
    password: String;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, name?: String, birthday?: Date, specialization?: String, username?: String, password?: String, createdAt?: String, updateAt?: String) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.specialization = specialization;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
    }

}
