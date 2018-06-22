import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-singin-patient',
    templateUrl: './singin_patient.component.html',
    styleUrls: ['./singin_patient.component.less']
})
export class SinginPatientComponent implements OnInit {
    notFound = false;

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.router.navigate(['patient_info']);
        }
    }

    loginPatient(e) {
        e.preventDefault();
        console.log(e);
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;

        this.post(username, password)
            .subscribe((receivedPatient) => {
                    if (!receivedPatient) {
                        console.log('unauthorized');
                        this.notFound = true;
                    } else {
                        console.log(receivedPatient);
                        localStorage.setItem('token', receivedPatient['token']);
                        this.notFound = false;
                        // this.user.setUserLoggedIn();
                        this.router.navigate(['patient_info']);
                    }
                },
                err => console.log(err));
    }

    post(username, password) {
        const patient = {username, password};
        return this.http.post('http://localhost:3000/api/patient/login', patient);
    }

    back() {
        this.router.navigate(['']);
    }
}
