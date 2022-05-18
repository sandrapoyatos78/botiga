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
    this.authService.signIn(email, password)
      .then((res) => {
        if (email == 'san@admin.com') {
          this.router.navigateByUrl('/tabs');
        } else {
          this.router.navigateByUrl('/login');
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
 
 ionicForm: FormGroup;
 submitted = false;

 ngOnInit() {

  this.ionicForm = this.formBuilder.group({
    email: ['', [Validators.pattern('[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})')]],
    pass: ['', [Validators.required, Validators.minLength(8)]]
   })
 }

 submitForm() {
  this.submitted = true
  if (!this.ionicForm.valid) {
    console.log('You have errors in your data')
  } else {
    this.logIn(this.ionicForm.value.email, this.ionicForm.value.pass)
  }
}
 get errors(){
  return this.ionicForm.controls;
}
goToSignup() {
  this.router.navigateByUrl('register');
}

}



