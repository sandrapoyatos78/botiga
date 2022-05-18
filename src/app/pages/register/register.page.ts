import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public authService: AuthenticationService,
    private firestore: AngularFirestore,
    private database:DataService,
    public router: Router) { }

    usuario = {
      email: "",
      password:""
    }
    altaUser() {
      this.database.create('usuarios', this.usuario).then (res => {
        console.log(res);
        this.successMsg = "New user created.";
        this.router.navigateByUrl('/login');
      });
    }
    
  successMsg: string = '';

  signUp(email, pass){
    this.authService.registerUser( email.value, pass.value)     
    .then((res) => {
      this.authService.signIn(email, pass);
      this.successMsg = "New user created.";
      this.router.navigateByUrl('/tabs');
    }).catch((error) => {
      window.alert(error.message)
    })
  }
  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
