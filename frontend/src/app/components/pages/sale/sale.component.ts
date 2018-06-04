import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { Sale } from '../../../models/sale';
import { MessageService } from 'primeng/components/common/messageservice';
import {InplaceModule} from 'primeng/primeng';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})

export class SaleComponent implements OnInit {

  displayDialog: boolean;
  sale: Sale=new Sale();
  selectedSale: Sale;
  newSale: boolean;
  sales: Sale[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
     this.apiService.get('api/sale').subscribe(res =>{    
     this.sales = res;
     console.log(this.sales[0].id);
    });
  }

  showDialogToAdd() {
    this.newSale = true;
    this.sale= new Sale();
    this.displayDialog =true;
  }
  save() {
    this.apiService.post('api/sale',this.sale).subscribe(res => {
      this.refresh();
    });
    this.displayDialog=false;
  } 

  
  edit() {
    this.apiService.put('api/sale/' + this.selectedSale.id, this.sale).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}

  delete() {
    this.apiService.delete('api/sale/' + this.selectedSale.id).subscribe(res => {
        this.refresh();
    });
    this.displayDialog = false;
}  

  onRowSelect(event) {
    this.newSale = false;
    this.sale = this.cloneSale(this.selectedSale);
   console.log(this.sales);
    this.displayDialog = true;
  }

  cloneSale(s: Sale): Sale {
    let sale = new Sale();
    for(let prop in s) {
      sale[prop] = s[prop];
    }
    return sale;

  }

 findSelectedSaleIndex(): number {
    return this.sales.indexOf(this.selectedSale);
 }
}
