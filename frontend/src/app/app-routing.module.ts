import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent, NavbarComponent} from './components';
import {PatientComponent} from './components/pages/patient/patient.component';
import {DoctorComponent} from './components/pages/doctor/doctor.component';
import {SigninComponent} from './components/pages/signin/signin.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'patient', component: PatientComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'signin', component: SigninComponent}
    // otherwise redirect to home
    // { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
