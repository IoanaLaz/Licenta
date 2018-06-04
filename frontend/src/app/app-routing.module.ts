
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , NavbarComponent } from './components';
import { ClientComponent } from './components/pages/client/client.component';
import { PrescriptionComponent } from './components/pages/prescription/prescription.component';
import { DrugComponent } from './components/pages/drug/drug.component';
import { SaleComponent } from './components/pages/sale/sale.component';
import { BillComponent } from './components/pages/bill/bill.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path: 'client', component: ClientComponent},
  {path: 'prescription', component: PrescriptionComponent},
  {path: 'drug', component: DrugComponent},
  { path: 'sale', component: SaleComponent },
  { path: 'bill', component: BillComponent}
  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
