import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  isUserLogged: boolean=false;
  constructor(private authService: UserAuthService) { }

  ngOnInit() {
    this.isUserLogged= this.authService.isUserLogged;
  }

  login()
  {
    this.authService.login('UserName', 'Password');
    this.isUserLogged= this.authService.isUserLogged;
  }

  logout()
  {
    this.authService.logout();
    this.isUserLogged= this.authService.isUserLogged;
  }

}
