// CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// UI
import {SuiModule} from 'ng2-semantic-ui';
// import {TabViewModule} from 'primeng/tabview';
// import {DropdownModule} from 'primeng/dropdown';
// Servicess
import {ApiService} from './service';
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';
import {HomeComponent, NavbarComponent} from './components';
import {ButtonModule, DataListModule, DataTableModule, DialogModule, SharedModule} from 'primeng/primeng';
// used to create fake backend
// import { fakeBackendProvider } from './service';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
import {PatientComponent} from './components/pages/patient/patient.component';
import {DoctorComponent} from './components/pages/doctor/doctor.component';
import {PrescriptionComponent} from './components/pages/prescription/prescription.component';
import {DrugComponent} from './components/pages/drug/drug.component';
import {DrugSubstanceComponent} from './components/pages/drug_substance/drug_substance.component';
import {PrescriptionDrugComponent} from './components/pages/prescription_drug/prescription_drug.component';
import {SubstanceComponent} from './components/pages/substance/substance.component';
import {SinginPatientComponent} from './components/pages/singin_patient/singin_patient.component';
import {SinginDoctorComponent} from './components/pages/singin_doctor/signin_doctor.component';
import {PatientInfoComponent} from './components/pages/patient_info/patient-info.component';
import {HttpClientModule} from '@angular/common/http';
import {DoctorInfoComponent} from './components/pages/doctor_info/doctor_info.component';





@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PatientComponent,
        DoctorComponent,
        PrescriptionComponent,
        DrugComponent,
        DrugSubstanceComponent,
        PrescriptionDrugComponent,
        SubstanceComponent,
        SinginPatientComponent,
        PatientInfoComponent,
        DoctorInfoComponent,
        SinginDoctorComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        SuiModule,
        DataTableModule,
        SharedModule,
        DataListModule,
        DialogModule,
        ButtonModule,
        // TabViewModule,
    ],
    providers: [
        AppRoutingModule,
        ApiService,
        // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
