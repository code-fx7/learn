import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  wasRegisteredSuccessfully: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnOInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(""),
      name: new FormControl(""),
      password: new FormControl(""),
      passwordRepeat: new FormControl("")
    });
  }

  register(){
    let email = this.registerForm.value.email;
    let name = this.registerForm.value.name;
    let password = this.registerForm.value.password;
    let passwordRepeat = this.registerForm.value.passwordRepeat;

    this.authService.register(email, password, passwordRepeat).subscribe(
      res => {
        console.log("erfolgreich")
      }
    );
   
    this.wasRegisteredSuccessfully = true;
   
    this.registerForm.reset();
  }
}
