import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-patient-info',
    templateUrl: './patient-info.component.html',
    styleUrls: ['./patient-info.component.less']
})
export class PatientInfoComponent implements OnInit {
    httpOptions = {
        headers: new HttpHeaders({
            'Authorization': localStorage.getItem('token')
        })
    };

    public patient;
    public prescriptions = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        console.log('ceva');
        this.sync();
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
    }

    sync() {
        this.http.post('http://localhost:3000/api/patient/sync', {}, this.httpOptions)
            .subscribe(patient => {
                console.log('ceva');
                this.patient = patient.patient;
                console.log(this.patient);
                this.prescriptions = this.patient.prescriptions;
                console.log(this.prescriptions);
                // this.subjects = patient['patient']['subjects'] as string[];
            }, (err: HttpErrorResponse) => {
                console.log(err.message);
                localStorage.removeItem('token');
                this.router.navigate(['login']);
            });
    }

    onLogOut() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
