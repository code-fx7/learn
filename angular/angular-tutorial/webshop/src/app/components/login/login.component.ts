import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }

  login(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(
      () => {
        console.log("Login erfolgreich.");
        
      }
    );

    this.router.navigate(["/dashboard"])

    this.loginForm.reset();

  }
}
