import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  /**
   * 
   */
  getUserId():any {
      return this.getUser().id;
  }
  /**
   * get token
   */
  getUserToken() : any {
    return this.getUser().token;
  }

  getUser() : any {
    return JSON.parse(window.localStorage.getItem('user'));
  }
  /**
   * is user is logged in 
   */
  isUserLoggedIn () : boolean {
    return this.getUser().id != undefined && this.getUser().id != "" && this.getUser().id != null;
  }
}
