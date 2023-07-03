import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  wasRegisteredSuccessfully = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(""),
      name: new FormControl(""),
      password: new FormControl(""),
      passwordRepeat: new FormControl("")
    });
  }

  register(){
    const email = this.registerForm.value.email;
    const name = this.registerForm.value.name;
    const password = this.registerForm.value.password;
    const passwordRepeat = this.registerForm.value.passwordRepeat;

    this.authService.register(email, password, passwordRepeat).subscribe(
      res => {
        console.log("erfolgreich")
      }
    );
   
    this.wasRegisteredSuccessfully = true;
   
    this.registerForm.reset();
  }
}
