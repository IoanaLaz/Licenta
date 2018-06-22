import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

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

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        console.log('ceva');
        this.sync();
        if (!localStorage.getItem('token')) {
            this.router.navigate(['logindoctor']);
        }
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
}
