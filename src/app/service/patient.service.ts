import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url :any  = "http://localhost:5000/users";
  private urlH:any ="http://localhost:5000/hospital";
  constructor(
    private http:HttpClient
  ) { }

  addPatient(payload) : Observable<any> {
   // return this.http.post(this.url+"/addPatient",payload);
   return this.http.post(this.url+"/addPatient",payload);
  }
  //--------list of patient
  patientList () : Observable<any>
  {
    return this.http.get(this.urlH+"/patientsList?id="+this.getUser().id);
  }
  getUser() :any {
    return JSON.parse(window.localStorage.getItem("user"));
  }
}

