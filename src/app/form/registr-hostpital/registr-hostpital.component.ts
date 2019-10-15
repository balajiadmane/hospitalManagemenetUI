import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../service/hospital.service';

import { ToastrManager } from 'ng6-toastr-notifications';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registr-hostpital',
  templateUrl: './registr-hostpital.component.html',
  styleUrls: ['./registr-hostpital.component.css']
})
export class RegistrHostpitalComponent implements OnInit {

  constructor(
    private hospital:HospitalService,
    public toaster:ToastrManager,
    private router:Router
  ) { }

  ngOnInit() {
  }

  registerHospital(form) : void {
      this.hospital.registerHospital(form).subscribe(
        (response)=>{
            this.toaster.successToastr(response.msg,"success!");
            this.router.navigate(['']);
        },
        (error)=>{
          this.toaster.errorToastr("Error","Erro!");
        }
      )
  }

}
