import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from '../../../service';

@Component({
    selector: 'app-doctor-info',
    templateUrl: './doctor_info.component.html',
    styleUrls: ['./doctor_info.component.less']
})
export class DoctorInfoComponent implements OnInit {
    httpOptions = {
        headers: new HttpHeaders({
            'Authorization': localStorage.getItem('token')
        })
    };
    public patientList: String;

    constructor(private http: HttpClient, private router: Router, private apiService: ApiService) {
    }

    public choosen = false;
    public patients = [];
    public drugs = [];
    public choosenPatient = '';

    ngOnInit() {
        this.refresh();
        this.sync();
        if (!localStorage.getItem('token')) {
            this.router.navigate(['logindoctor']);
        }
    }

    refresh() {
        this.apiService.get('api/patient').subscribe(res => {
            this.patients = res;
            console.log(res);
        });
        this.apiService.get('api/drug').subscribe(res => {
            this.drugs = res;
            console.log(res);
        });
    }

    sync() {
        this.http.post('http://localhost:3000/api/doctor/sync', {}, this.httpOptions)
            .subscribe(doctor => {
                console.log('ceva');
                console.log(doctor);
                // this.subjects = doctor['doctor']['subjects'] as string[];
            }, (err: HttpErrorResponse) => {
                console.log(err.message);
                localStorage.removeItem('token');
                this.router.navigate(['logindoctor']);
            });
    }

    onLogOut() {
        localStorage.removeItem('token');
        this.router.navigate(['logindoctor']);
    }

    activateNav(targetValue) {
        this.choosen = true;
        console.log(targetValue);
        this.choosenPatient = targetValue;
    }

}
