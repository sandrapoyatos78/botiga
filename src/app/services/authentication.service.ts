import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth, 
    public router: Router, 
    public ngZone: NgZone) {
      this.ngFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
        } else {
          localStorage.setItem('user', null);
        }
      })
    }
    signIn(email, password) {
      return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }

    registerUser(email, password) {
      return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const userData: User = {
          email: email,
          password: password}
        this.setUserData(userData);
      });
    }

    setUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
      const userData: User = {
        email: user.email,
        password: user.pass
      }
      return userRef.set(userData)
    }
   // FUNCION PARA SABER SI SE HA LOGEADO
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
    }
   
     // FUNCION PARA LOGOUT
     signOut() {
      return this.ngFireAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
    }
   
  } 
  
