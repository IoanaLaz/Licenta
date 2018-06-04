import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Prescription } from '../../../models/prescription';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.less']
})

export class PrescriptionComponent implements OnInit {

  displayDialog: boolean;
  prescription: Prescription=new Prescription();
  selectedPrescription: Prescription;
  newPrescription: boolean;
  prescriptions: Prescription[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/prescription').subscribe(res =>{    
     this.prescriptions = res;
     console.log(this.prescriptions[0].id);
    });
  }

  showDialogToAdd() {
    this.newPrescription = true;
    this.prescription= new Prescription();
    this.displayDialog =true;
  }
  save() {
    this.apiService.post('api/prescription',this.prescription).subscribe(res => {
      this.refresh();
    });
    this.displayDialog=false;
  } 

  
  edit() {
    this.apiService.put('api/prescription/' + this.selectedPrescription.id, this.prescription).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}

  delete() {
    this.apiService.delete('api/prescription/' + this.selectedPrescription.id).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}  

  onRowSelect(event) {
    this.newPrescription = false;
    this.prescription = this.clonePrescription(this.selectedPrescription);
   console.log(this.prescriptions);
    this.displayDialog = true;
  }

  clonePrescription(p: Prescription): Prescription {
    let prescription = new Prescription();
    for(let prop in p) {
      prescription[prop] = p[prop];
    }
    return prescription;

  }

 findSelectedPrescriptionIndex(): number {
    return this.prescriptions.indexOf(this.selectedPrescription);
 }
}
