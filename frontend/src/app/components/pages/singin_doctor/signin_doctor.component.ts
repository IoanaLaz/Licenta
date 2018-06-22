import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-singin-doctor',
    templateUrl: './signin_doctor.component.html',
    styleUrls: ['./signin_doctor.component.less']
})
export class SinginDoctorComponent implements OnInit {
    notFound = false;

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.router.navigate(['doctor_info']);
        }
    }

    loginDoctor(e) {
        e.preventDefault();
        console.log(e);
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        console.log('tttttt ' + username + ' ' + password);
        this.post(username, password)
            .subscribe((receiveDdoctor) => {
                    console.log('tttttt ' + receiveDdoctor);
                    if (!receiveDdoctor) {
                        console.log('unauthorized');
                        this.notFound = true;
                    } else {
                        console.log(receiveDdoctor);
                        localStorage.setItem('token', receiveDdoctor['token']);
                        this.notFound = false;
                        // this.user.setUserLoggedIn();
                        this.router.navigate(['doctor_info']);
                    }
                },
                err => console.log(err));
    }

    post(username, password) {
        const doctor = {username, password};
        return this.http.post('http://localhost:3000/api/doctor/logindoctor', doctor);
    }

    back() {
        this.router.navigate(['']);
    }
}
