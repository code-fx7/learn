import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  checkKey(event: KeyboardEvent): void {
    if (event.key !== 'Enter') {
      return;
    }
    this.close(this.data);
  }

  close(data: string | null = null) {
    this.dialogRef.close(data);
  }
}