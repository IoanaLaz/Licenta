import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Drug } from '../../../models/drug';
import { MessageService } from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.less']
})

export class DrugComponent implements OnInit {

  displayDialog: boolean;
  drug: Drug=new Drug();
  selectedDrug: Drug;
  newDrug: boolean;
  drugs: Drug[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/drug').subscribe(res =>{    
     this.drugs = res;
     console.log(this.drugs[0].id);
    });
  }

  showDialogToAdd() {
    this.newDrug = true;
    this.drug= new Drug();
    this.displayDialog =true;
  }
  save() {
    this.apiService.post('api/drug',this.drug).subscribe(res => {
      this.refresh();
    });
    this.displayDialog=false;
  } 

  
  edit() {
    this.apiService.put('api/drug/' + this.selectedDrug.id, this.drug).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}

  delete() {
    this.apiService.delete('api/drug/' + this.selectedDrug.id).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}  

  onRowSelect(event) {
    this.newDrug= false;
    this.drug= this.cloneDrug(this.selectedDrug);
   console.log(this.drugs);
    this.displayDialog = true;
  }

  cloneDrug(d: Drug): Drug {
    let drug = new Drug();
    for(let prop in d) {
      drug[prop] = d[prop];
    }
    return drug;

  }

 findSelectedDrugIndex(): number {
    return this.drugs.indexOf(this.selectedDrug);
 }
}
