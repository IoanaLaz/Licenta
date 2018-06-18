import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
// import {Doctor} from '../../../models/doctor';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.less']
})

export class DoctorComponent implements OnInit {

    displayDialog: boolean;
    doctor;
    // selectedDoctor: Doctor;
    newDoctor: boolean;

    // doctors: Doctor[];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/doctor').subscribe(res => {
            this.doctor = res;
            console.log(this.doctor[0].name);
        });
    }

    /*
        showDialogToAdd() {
            this.newDoctor = true;
            this.doctor = new Doctor();
            this.displayDialog = true;
        }*/

    // save() {
    //     this.apiService.post('api/doctor', this.doctor).subscribe(res => {
    //         this.refresh();
    //     });
    //     this.displayDialog = false;
    // }
    //
    //
    // edit() {
    //     this.apiService.put('api/doctor/' + this.selectedDoctor.id, this.doctor).subscribe(res => {
    //         this.refresh();
    //     });
    //     this.displayDialog = false;
    // }
    //
    // delete() {
    //     this.apiService.delete('api/doctor/' + this.selectedDoctor.id).subscribe(res => {
    //         this.refresh();
    //     });
    //     this.displayDialog = false;
    // }
    //
    // onRowSelect(event) {
    //     this.newDoctor = false;
    //     console.log(this.doctors);
    //     this.displayDialog = true;
    // }
    //
    //
    // findSelectedDoctorIndex(): number {
    //     return this.doctors.indexOf(this.selectedDoctor);
    // }
}
