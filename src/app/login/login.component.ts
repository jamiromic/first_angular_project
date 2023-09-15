import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = "";
  password: string = "";

  autenticato: boolean = false;
  errorMsg: string = "L'userId e/o la password sono errati"

  titolo: string = "Accesso & Autenticazione"
  sottotitolo: string = "Procedi ad inserire la userid e la password"
  
  constructor(private route: Router, private BasicAuth: AuthappService) {

  }

  gestAuth = (): void => {
    console.log(this.userId,this.password);

    if(this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]) 
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }

}
