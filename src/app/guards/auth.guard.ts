import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  
  constructor(public authService: AuthenticationService,
    public router: Router){ }
 
  canLoad(): boolean {
    const result = this.authService.isLoggedIn
    if(!result){
      console.log('Acceso denegado');
      this.router.navigateByUrl('/login');
    }
    return this.authService.isLoggedIn;
  }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
