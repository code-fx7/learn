import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // FormGroup Schreibmöglichkeit (eher für einfache Formulare)
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });
  constructor() {
    this.loginForm.valueChanges.subscribe(console.log);
  }
}


  // FormBuilder Schreibmöglichkeit (eher für komplexe/dynamische Formulare)

//   public loginFormFB: FormGroup;

//   constructor(private _fb: FormBuilder) {
//     this.loginFormFB = this._fb.group({
//       username: ['', [
//         Validators.required,
//         Validators.minLength(5)
//       ], []],
//       password: ['', [
//         Validators.required
//       ], []]
//     });
//   }
// }
