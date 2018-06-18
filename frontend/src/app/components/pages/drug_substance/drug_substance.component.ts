import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {DrugSubstance} from '../../../models/drug_substance';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-drugsubstance',
    templateUrl: './drug_substance.component.html',
    styleUrls: ['./drug_substance.component.less']
})

export class DrugSubstanceComponent implements OnInit {

    displayDialog: boolean;
    drug_substance: DrugSubstance = new DrugSubstance();
    selectedDrug_substance: DrugSubstance;
    newDrug_substance: boolean;
    drug_substances: DrugSubstance [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/drug_substance').subscribe(res => {
            this.drug_substances = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newDrug_substance = true;
        this.drug_substance = new DrugSubstance();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedDrug_substance);
        this.apiService.post('api/drug_substance', this.selectedDrug_substance).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/drug_substance/' + this.selectedDrug_substance.id, this.drug_substance).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const drug_substances = [...this.drug_substances];
        if (this.newDrug_substance) {
            drug_substances.push(res);
        } else {
            drug_substances[this.findSelectedDrug_substanceIndex()] = this.selectedDrug_substance;
        }
        this.drug_substances = drug_substances;
        this.selectedDrug_substance = null;
        this.displayDialog = false;
    }

    updateDrug_substance(select: DrugSubstance) {
        if (this.newDrug_substance) {
            this.apiService.post('api/drug/', this.selectedDrug_substance).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/drug_substance/', this.selectedDrug_substance).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/drug_substance/' + this.selectedDrug_substance.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newDrug_substance = false;
        console.log(this.drug_substances);
        this.displayDialog = true;
    }


    findSelectedDrug_substanceIndex(): number {
        return this.drug_substances.indexOf(this.selectedDrug_substance);
    }
}
