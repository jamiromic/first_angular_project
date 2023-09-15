import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string) : boolean => {
    var retVal = (userid === 'jamiromic' && password === 'jimenez0486') ? true : false;

    if(retVal) {
      sessionStorage.setItem('userid', userid);
    }
    return retVal;
  }
  
}
