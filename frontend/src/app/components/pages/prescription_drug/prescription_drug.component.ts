import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {PrescriptionDrug} from '../../../models/prescription_drug';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-prescriptiondrug',
    templateUrl: './prescription_drug.component.html',
    styleUrls: ['./prescription_drug.component.less']
})

export class PrescriptionDrugComponent implements OnInit {

    displayDialog: boolean;
    prescription_drug: PrescriptionDrug = new PrescriptionDrug();
    selectedPrescription_drug: PrescriptionDrug;
    newPrescription_drug: boolean;
    prescription_drugs: PrescriptionDrug [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/drug').subscribe(res => {
            this.prescription_drugs = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newPrescription_drug = true;
        this.prescription_drug = new PrescriptionDrug();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedPrescription_drug);
        this.apiService.post('api/drug', this.selectedPrescription_drug).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/prescription_drug/' + this.selectedPrescription_drug.id, this.prescription_drug).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const prescription_drugs = [...this.prescription_drugs];
        if (this.newPrescription_drug) {
            prescription_drugs.push(res);
        } else {
            prescription_drugs[this.findSelectedPrescription_drugIndex()] = this.selectedPrescription_drug;
        }
        this.prescription_drugs = prescription_drugs;
        this.selectedPrescription_drug = null;
        this.displayDialog = false;
    }

    updatePrescription_drug(select: PrescriptionDrug) {
        if (this.newPrescription_drug) {
            this.apiService.post('api/prescription_drug/', this.selectedPrescription_drug).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/prescription_drug/', this.selectedPrescription_drug).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/prescription_drug/' + this.selectedPrescription_drug.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newPrescription_drug = false;
        console.log(this.prescription_drugs);
        this.displayDialog = true;
    }


    findSelectedPrescription_drugIndex(): number {
        return this.prescription_drugs.indexOf(this.selectedPrescription_drug);
    }
}
