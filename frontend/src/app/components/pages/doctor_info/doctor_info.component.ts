import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from '../../../service';
import {Doctor} from '../../../models/doctor';
import {Patient} from '../../../models/patient';

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

    public chosen = false;
    public rows = [];
    public patients = [];
    public drugs = [];
    public chosenPatient;

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
            // console.log(res);
        });
        this.apiService.get('api/drug').subscribe(res => {
            this.drugs = res;
            // console.log(res);
        });
    }

    onSelectPatient() {
        console.log(this.chosenPatient);
    }

    sync() {
        this.http.post('http://localhost:3000/api/doctor/sync', {}, this.httpOptions)
            .subscribe(doctor => {
                // this.subjects = doctor['doctor']['subjects'] as string[];
            }, (err: HttpErrorResponse) => {
                // console.log(err.message);
                localStorage.removeItem('token');
                this.router.navigate(['logindoctor']);
            });
    }

    onLogOut() {
        localStorage.removeItem('token');
        this.router.navigate(['logindoctor']);
    }

    addNewRow() {
        this.rows.push(1);
        console.log(this.rows);
    }

    drugId(targetValue) {
        let id = targetValue.split(' ')[0];
        console.log(id);
    }

    activateNav(targetValue) {
        this.chosen = true;
        let i;
        this.patients.forEach((elem, index) => {
            if (targetValue == elem.id) {
                i = index;
            }
        });
        this.chosenPatient = this.patients[i];
    }

    save() {
        // let diagnostic = $('.diagnostic').val();
        // console.log(diagnostic);
        // let drugId = $('.drugId option:selected').text().trim().split(' ')[0];
        // console.log(drugId);
        // let dosage = $('.dosage').val();
        // console.log(dosage);
        // let body = {
        //     diagnostic: diagnostic, id_drug: drugId, dosage: dosage, id_patient:this.chosenPatient.id
        // };
        // console.log(body);
        // this.http.post('http://localhost:3000/api/prescription', body, this.httpOptions)
        //     .subscribe(prescription => {
        //         console.log('saved to the backend');
        //     });
    }

}
