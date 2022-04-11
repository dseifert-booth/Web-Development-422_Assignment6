import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import User from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = {userName: "", password: "", _id: ""};
  warning : String = "";
  loading : boolean = false;

  constructor(private _authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.userName != "" &&
        this.user.password != "") {
      this.loading = true;
      this._authService.login(this.user)
                      .subscribe(
                        (success) => {
                          this.loading = false;
                          localStorage.setItem("access_token", success.token);
                          this.router.navigate(["/newReleases"]);
                        },
                        (err) => {
                          this.warning = err.error.message;
                          this.loading = false;
                        }
                      );
    }
  }
}
