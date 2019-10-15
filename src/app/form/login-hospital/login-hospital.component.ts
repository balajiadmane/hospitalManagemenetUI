import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../service/hospital.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-hospital',
  templateUrl: './login-hospital.component.html',
  styleUrls: ['./login-hospital.component.css']
})
export class LoginHospitalComponent implements OnInit {

  constructor(
    private hospital:HospitalService,
    private toaster:ToastrManager,
    private router:Router
  ) { }

  ngOnInit() {
    window.localStorage.clear();
  } 
  loginHospital(form) : void {
      this.hospital.loginHospital(form).subscribe(
        (response)=>{
            this.toaster.successToastr(response.msg,"Success!");
            window.localStorage.setItem("user",JSON.stringify(response));
            this.router.navigate(['hospital'])
        },
        (error)=>{
            this.toaster.errorToastr(error.msg,"Error!");
        }
      )
  }
}
