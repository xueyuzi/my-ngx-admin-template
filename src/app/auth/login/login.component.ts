import { Component, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthService, NbAuthResult } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = {};
  errors: string[];
  constructor(private service: NbAuthService, private router: Router,private authService:AuthService) {

  }
  login() {
    console.log("submit")
    this.service.authenticate("account", this.user).subscribe((result: NbAuthResult) => {
      var res = result.getResponse().body;
      if (res.code == 0) {
        setTimeout(() => {
          return this.router.navigateByUrl("/custom/crf");
        }, 0);
        this.authService.login("token");
      } else {
        this.errors = res.msg;
      }
      console.log();
    })

  }


}
