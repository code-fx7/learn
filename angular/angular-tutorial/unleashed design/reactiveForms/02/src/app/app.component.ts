import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public memberListForm: FormGroup = this._createForm();
  constructor(private _fb: FormBuilder) { }

  private _createForm(): FormGroup {
    return this._fb.group({
      lastName: ['', [Validators.required], []],
      memberList: this._fb.array([])
    })
}

  private _createMember(): FormGroup {
    return this._fb.group({
      vorname: ['', [Validators.required], []],
      nachname: ['', [Validators.required], []],
    })
  }

  public addMember(): void {
    this.memberList.push(this._createMember());
  }

  public get memberList(): FormArray {
    return this.memberListForm.get('memberList') as FormArray;
  }

  public isDisabled(): boolean {
    return !(this.memberListForm.valid && (this.memberListForm.touched || this.memberListForm.dirty))
  }
}
