import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPatientComponent } from './form/add-patient/add-patient.component';
import {PatientService} from "./service/patient.service";
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { RegistrHostpitalComponent } from './form/registr-hostpital/registr-hostpital.component';
import {HospitalService} from './service/hospital.service';
import { LoginHospitalComponent } from './form/login-hospital/login-hospital.component';
import { HospitalComponent } from './component/hospital/hospital.component';
import {UserDetailsService} from './service/user-details.service';
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    RegistrHostpitalComponent,
    LoginHospitalComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PatientService,HospitalService,UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
