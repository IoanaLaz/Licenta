import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {Doctor} from '../../../models/doctor';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.less']
})

export class DoctorComponent implements OnInit {

    displayDialog: boolean;
    doctor: Doctor = new Doctor();
    selectedDoctor: Doctor;
    newDoctor: boolean;
    doctors: Doctor [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/doctor').subscribe(res => {
            this.doctors = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newDoctor = true;
        this.doctor = new Doctor();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedDoctor);
        this.apiService.post('api/doctor', this.selectedDoctor).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/doctor/' + this.selectedDoctor.id, this.doctor).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const doctors = [...this.doctors];
        if (this.newDoctor) {
            doctors.push(res);
        } else {
            doctors[this.findSelectedDoctorIndex()] = this.selectedDoctor;
        }
        this.doctors = doctors;
        this.selectedDoctor = null;
        this.displayDialog = false;
    }

    updateDoctor(select: Doctor) {
        if (this.newDoctor) {
            this.apiService.post('api/doctor/', this.selectedDoctor).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/doctor/', this.selectedDoctor).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/doctor/' + this.selectedDoctor.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newDoctor = false;
        console.log(this.doctors);
        this.displayDialog = true;
    }


    findSelectedDoctorIndex(): number {
        return this.doctors.indexOf(this.selectedDoctor);
    }
}
