import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import RegisterUser from '../RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser : RegisterUser = { username: "", password: "", password2: "" };
  warning : String = "";
  success : boolean = false;
  loading : boolean = false;
  constructor(private _authService : AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerUser.username != "" &&
        this.registerUser.password != "" &&
        this.registerUser.password2 != "") {
      this.loading = true;
      this._authService.register(this.registerUser)
                      .subscribe(
                        () => {
                          this.success = true;
                          this.warning = "";
                          this.loading = false;
                        },
                        (err) => {
                          this.success = false;
                          this.warning = err.error.message;
                          this.loading = false;
                        }
                      );
    }
  }

}
