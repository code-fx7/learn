import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        // Die Methode "required" wird ohne Klammern "()" geschrieben, da dies nur eine Referenz ist und nicht ausgeführt werden soll.
        // .bind(this) => JavaScript Trick, ohne würde es sich nicht auf die Klasse beziehen
        // this.forbiddenNames wird nicht innerhalb der Klasse aufgerufen, sondern um die Gültigkeit zu überprüfen
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // Die Formularfelder "vorausfüllen"
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    // Die vorausgefüllten Formularfelder ändern
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }
  
  // Zugang zum Formular
  onSubmit() {
    console.log(this.signupForm);
    // Die Formularfelder nach dem absenden zurücksetzen
    // Der reset Methode kann auch ein Objekt mitgegeben werden welche Felder gelöscht werden sollen
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // Alles was in den äußeren Klammen eingeschlossen ist, soll TS als Typ FormArray behandeln.
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Key-value-pair
  // Der Schlüssel soll als Zeichenkette interpretiert werden.
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    // -1 wird als Kontrollwert dieses Arrays zurückgeben und als wahr interpretiert 
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    // Darf nicht zurückgegeben werden !
    // return {'nameIsForbidden': false};

    // return null, oder return einfach weglassen
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;    
  }
}
