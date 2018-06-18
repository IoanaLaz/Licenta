import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {Drug} from '../../../models/drug';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-drug',
    templateUrl: './drug.component.html',
    styleUrls: ['./drug.component.less']
})

export class DrugComponent implements OnInit {

    displayDialog: boolean;
    drug: Drug = new Drug();
    selectedDrug: Drug;
    newDrug: boolean;
    drugs: Drug [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/drug').subscribe(res => {
            this.drugs = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newDrug = true;
        this.drug = new Drug();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedDrug);
        this.apiService.post('api/drug', this.selectedDrug).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/drug/' + this.selectedDrug.id, this.drug).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const drugs = [...this.drugs];
        if (this.newDrug) {
            drugs.push(res);
        } else {
            drugs[this.findSelectedDrugIndex()] = this.selectedDrug;
        }
        this.drugs = drugs;
        this.selectedDrug = null;
        this.displayDialog = false;
    }

    updateDrug(select: Drug) {
        if (this.newDrug) {
            this.apiService.post('api/drug/', this.selectedDrug).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/drug/', this.selectedDrug).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/drug/' + this.selectedDrug.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newDrug = false;
        console.log(this.drugs);
        this.displayDialog = true;
    }


    findSelectedDrugIndex(): number {
        return this.drugs.indexOf(this.selectedDrug);
    }
}
