import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public authService: AuthenticationService, public formBuilder: FormBuilder){ }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        this.router.navigateByUrl('/tabs');
      }).catch((error) => {
        window.alert(error.message)
      })
  }
 
 ionicForm: FormGroup;
 submitted = false;

 ngOnInit() {

  this.ionicForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.pattern('[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})')]],
    contraseña: ['', [Validators.required, Validators.minLength(8)]]
   })
 }

 submitForm() {
  this.submitted = true
  if (!this.ionicForm.valid) {
    console.log('You have errors in your data')
  } else {
    console.log(this.ionicForm.value)
  }
}
 get errors(){
  return this.ionicForm.controls;
}
}



