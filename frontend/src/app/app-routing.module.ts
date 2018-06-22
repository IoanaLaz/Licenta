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
import {SinginPatientComponent} from './components/pages/singin_patient/singin_patient.component';
import {PatientInfoComponent} from './components/pages/patient_info/patient-info.component';
import {SinginDoctorComponent} from './components/pages/singin_doctor/signin_doctor.component';
import {DoctorInfoComponent} from './components/pages/doctor_info/doctor_info.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'patient', component: PatientComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'prescription', component: PrescriptionComponent},
    {path: 'drug', component: DrugComponent},
    {path: 'drug_substance', component: DrugSubstanceComponent},
    {path: 'prescription_drug', component: PrescriptionDrugComponent},
    {path: 'substance', component: SubstanceComponent},
    {path: 'login' , component: SinginPatientComponent},
    {path: 'patient_info', component: PatientInfoComponent},
    {path: 'logindoctor' , component: SinginDoctorComponent},
    {path: 'doctor_info', component: DoctorInfoComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
