import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = "";
  password: string = "";

  autenticato: boolean = true;
  consentito: boolean = false;
  errorMsg: string = "L'userId e/o la password sono errati"

  titolo: string = "Accesso & Autenticazione"
  sottotitolo: string = "Procedi ad inserire la userid e la password"
  
  constructor(private route: Router) {

  }

  gestAuth = (): void => {
    console.log(this.userId,this.password);

    if(this.userId === "jamiromic" && this.password === "jimenez0486") {
      this.autenticato = true;
      this.route.navigate(['welcome', this.userId])
    } else {
      this.autenticato = false;
    }
  }

}
