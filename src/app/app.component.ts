import { Component } from '@angular/core';
import {UserDetailsService} from './service/user-details.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';

  constructor(
    private userservice:UserDetailsService
  ){
    console.log(this.userservice.isUserLoggedIn());
  }
}
