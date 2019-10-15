import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

   url: any = "http://localhost:5000/hospital";
  constructor(
    private http: HttpClient
  ) { }


  registerHospital(payload): Observable<any> {
    return this.http.post(this.url+"/registerHospital", payload);
  }
  
//-------add biilss
addBills(payload) : Observable<any>{
  return this.http.post(this.url+"/addPatientBill",payload);
}
//----release patient 
releasePatient(payload) : Observable<any> {
  return this.http.put(this.url+"/releasePation",payload);
}
  loginHospital(payload) : Observable<any> {
    return this.http.post(this.url+"/loginHospital",payload);
  }
}
