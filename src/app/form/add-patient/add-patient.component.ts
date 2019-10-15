import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../service/patient.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(
    private pat_service:PatientService,
    public toastr: ToastrManager,
    private router:Router
  ) { }

  ngOnInit() {
  }

  addPatient(form) : void {
    form['hospital_id'] =  this.pat_service.getUser().id;
      this.pat_service.addPatient(form).subscribe(
        (response)=>{
          console.log(response)
          this.toastr.successToastr(response.msg, 'Success!');
            this.router.navigate(['hospital']);
        },
        (error)=>{
          console.log(error)
        }
      )
  }
}
