///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { OnInit , Component} from '@angular/core';
import {ApiService} from '../../../service/';
import {Prescription} from '../../../models/prescription';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';


@Component({
    selector: 'app-prescription',
    templateUrl: './prescription.component.html',
    styleUrls: ['./prescription.component.less']
})
export class PrescriptionComponent implements OnInit {

    displayDialog: boolean;
    prescription: Prescription = new Prescription();
    selectedPrescription: Prescription;
    newPrescription: boolean;
    prescriptions: Prescription [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/prescription').subscribe(res => {
            this.prescriptions = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newPrescription = true;
        this.prescription = new Prescription();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedPrescription);
        this.apiService.post('api/prescription', this.selectedPrescription).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/prescription/' + this.selectedPrescription.id, this.prescription).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const prescriptions = [...this.prescriptions];
        if (this.newPrescription) {
            prescriptions.push(res);
        } else {
            prescriptions[this.findSelectedPrescriptionIndex()] = this.selectedPrescription;
        }
        this.prescriptions = prescriptions;
        this.selectedPrescription = null;
        this.displayDialog = false;
    }

    updatePrescription(select: Prescription) {
        if (this.newPrescription) {
            this.apiService.post('api/prescription/', this.selectedPrescription).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/prescription/', this.selectedPrescription).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/prescription/' + this.selectedPrescription.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newPrescription = false;
        console.log(this.prescriptions);
        this.displayDialog = true;
    }


    findSelectedPrescriptionIndex(): number {
        return this.prescriptions.indexOf(this.selectedPrescription);
    }
}
