import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-zeiterfassungs-dialog',
  templateUrl: './zeiterfassungs-dialog.component.html',
  styleUrls: ['./zeiterfassungs-dialog.component.scss']
})
export class ZeiterfassungsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ZeiterfassungsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
