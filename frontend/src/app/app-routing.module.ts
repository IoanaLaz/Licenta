import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent, NavbarComponent} from './components';
import {PatientComponent} from './components/pages/patient/patient.component';
import {DoctorComponent} from './components/pages/doctor/doctor.component';
import {PrescriptionComponent} from './components/pages/prescription/prescription.component';
import {DrugComponent} from './components/pages/drug/drug.component';
import {DrugSubstanceComponent} from './components/pages/drug_substance/drug_substance.component';
import {PrescriptionDrugComponent} from './components/pages/prescription_drug/prescription_drug.component';
import { SubstanceComponent } from './components/pages/substance/substance.component';
//import {SigninComponent} from './components/pages/signin/signin.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'patient', component: PatientComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'prescription', component: PrescriptionComponent},
    {path: 'drug', component: DrugComponent},
    {path: 'drug_substance', component: DrugSubstanceComponent},
    {path: 'prescription_drug', component: PrescriptionDrugComponent},
    {path: 'substance', component: SubstanceComponent}

    //{path: 'signin', component: SigninComponent}
    // otherwise redirect to home
    // { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
