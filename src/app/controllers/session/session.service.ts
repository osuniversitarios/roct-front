import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // Data
  public user: any;
  public isLogged = false;

  constructor(private router: Router, 
  ) { }

  public getUserId(){
    return this.user.id;
  }

  public setUser(user: any): void {
    this.user = user;
  }

  public clearUser(): void {
    this.user = undefined;
  }

  public setToken(token: string): void {
    localStorage.setItem('Authorization', token);
  }

  public logIn(token: string): void {
    //this.cookie.set('Authorization', token);
    // localStorage.setItem('User', user);
    localStorage.setItem('Authorization', token);
    this.isLogged = true;
    //console.log(localStorage.getItem('Authorization'))
  }

  public getToken(): string {
    return localStorage.getItem('Authorization');
    //return this.cookie.get('Authorization');
  }

  public logOut(): void {
    //this.cookie.deleteAll();
    localStorage.clear();
    this.clearUser();
    this.isLogged = false;
    this.router.navigate(['/']);
  }
}