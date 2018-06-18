import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/';
import {Substance} from '../../../models/substance';
import {MessageService} from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
    selector: 'app-substance',
    templateUrl: './substance.component.html',
    styleUrls: ['./substance.component.less']
})

export class SubstanceComponent implements OnInit {

    displayDialog: boolean;
    substance: Substance = new Substance();
    selectedSubstance: Substance;
    newSubstance: boolean;
    substances: Substance [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.apiService.get('api/substance').subscribe(res => {
            this.substances = res;
            console.log('called');
        });
    }

    showDialogToAdd() {
        this.newSubstance = true;
        this.substance = new Substance();
        this.displayDialog = true;
    }

    save() {
        console.log(this.selectedSubstance);
        this.apiService.post('api/substance', this.selectedSubstance).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }


    edit() {
        this.apiService.put('api/substance/' + this.selectedSubstance.id, this.substance).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    addOrUpdate(res) {
        const substances = [...this.substances];
        if (this.newSubstance) {
            substances.push(res);
        } else {
            substances[this.findSelectedSubstanceIndex()] = this.selectedSubstance;
        }
        this.substances = substances;
        this.selectedSubstance = null;
        this.displayDialog = false;
    }

    updateSubstance(select: Substance) {
        if (this.newSubstance) {
            this.apiService.post('api/substance/', this.selectedSubstance).subscribe(res => this.addOrUpdate(res));
        } else {
            this.apiService.put('api/substance/', this.selectedSubstance).subscribe(res => this.addOrUpdate(res));
        }
    }

    delete() {
        this.apiService.delete('api/substance/' + this.selectedSubstance.id).subscribe(res => {
            this.refresh();
        });
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newSubstance = false;
        console.log(this.substances);
        this.displayDialog = true;
    }


    findSelectedSubstanceIndex(): number {
        return this.substances.indexOf(this.selectedSubstance);
    }
}
