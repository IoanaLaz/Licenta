// CORE
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// UI
import {SuiModule} from 'ng2-semantic-ui';
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
import {SinginPatientDoctorComponent} from './components/pages/singin-patient-doctor/singin-patient-doctor.component';
import {PatientInfoComponent} from './components/pages/patient-info/patient-info.component';
import {HttpClientModule} from '@angular/common/http';

//import { SigninComponent } from './components/pages/signin/signin.component';


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
        SinginPatientDoctorComponent,
        PatientInfoComponent
        //SigninComponent
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
        ButtonModule
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
