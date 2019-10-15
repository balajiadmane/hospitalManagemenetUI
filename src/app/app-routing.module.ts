import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrHostpitalComponent } from './form/registr-hostpital/registr-hostpital.component';
import { AddPatientComponent } from './form/add-patient/add-patient.component';

import { HospitalComponent } from './component/hospital/hospital.component';
import { LoginHospitalComponent } from './form/login-hospital/login-hospital.component';
const routes: Routes = [
  {path:"addPatient" , component:AddPatientComponent},
  {path:"regiserHospital",component:RegistrHostpitalComponent},
  {path:"",component:LoginHospitalComponent},
  {path:"hospital",component:HospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
