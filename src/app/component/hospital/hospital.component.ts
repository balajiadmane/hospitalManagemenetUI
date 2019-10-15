import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service'
import { HospitalService } from '../../service/hospital.service';

import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  patientList: any = [];
  patientReleased:any = [];
  patientUnReleased:any = [];
  patientIdBills: any = "";
  constructor(
    private patient: PatientService,
    private hospital: HospitalService,
    private toaster: ToastrManager
  ) { }

  ngOnInit() {
      this.patientLists();
  }

  patientLists() : void {
    this.patient.patientList().subscribe(
      (response) => {
        console.log(response);
        this.patientList = response;
        this.patientReleased = this.patientList.filter(dt=>dt.state === "FALSE");
        this.patientUnReleased = this.patientList.filter(dt=>dt.state === "TRUE");
      },
      (error) => {

      }
    )
  }
  AddBills(patient): void {
    this.patientIdBills = patient.id;
  }

  //=====add patient bills
  addPatientBills(bills): void {
    bills['id'] = this.patientIdBills;
    var dis = bills.discount / 100;
    bills['Bills'] = bills.Bills - (bills.Bills * dis)
    this.hospital.addBills(bills).subscribe(
      (response) => {
        this.toaster.successToastr(response.msg, "Success!");
      },
      (error) => {
        this.toaster.errorToastr("Error", "Error!");
      }
    )
  }

  releasePatient(patient) : void {
    if(patient.state === "TRUE"){
        patient['state'] = "FALSE";
    }else{
        patient['state'] = "TRUE";
    }
    this.hospital.releasePatient(patient).subscribe(
      (response)=>{
        this.toaster.successToastr(response.msg,"Success!");
        this.patientLists();
      },
      (error)=>{
        this.toaster.errorToastr("Error","Error!");
      }
    );
  }
}

export class Patient {

}
