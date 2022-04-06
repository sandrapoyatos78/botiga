import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public authService: AuthenticationService,
    public router: Router) { }
    
  signUp(userName, email, password){
    this.authService.registerUser(userName.value, email.value, password.value)     
    .then((res) => {
      this.authService.signIn(email, password);
      this.router.navigate(['tabs']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
 
  ngOnInit() {
  }

}
