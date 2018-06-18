import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {Patient} from '../../../models/patient';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.less']
})

export class PatientComponent implements OnInit {

    displayDialog: boolean;
    patient: Patient = new Patient();
    selectedPatient: Patient;
    newPatient: boolean;
    patients: Patient[];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/patient').subscribe(res => {
            this.patients = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newPatient = true;
        this.patient = new Patient();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedPatient);
        this.apiService.post('api/patient', this.selectedPatient).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/patient/' + this.selectedPatient.id, this.patient).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const patients = [...this.patients];
        if (this.newPatient) {
            patients.push(res);
        } else {
            patients[this.findSelectedPatientIndex()] = this.selectedPatient;
        }
        this.patients = patients;
        this.selectedPatient = null;
        this.displayDialog = false;
    }

    updatePatient(select: Patient) {
        if (this.newPatient) {
            this.apiService.post('api/patient/', this.selectedPatient).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/patient/', this.selectedPatient).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/patient/' + this.selectedPatient.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newPatient = false;
        console.log(this.patients);
        this.displayDialog = true;
    }


    findSelectedPatientIndex(): number {
        return this.patients.indexOf(this.selectedPatient);
    }
}
