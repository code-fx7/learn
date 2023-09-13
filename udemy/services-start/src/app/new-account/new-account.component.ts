import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() addAccount = new EventEmitter<{name: string, status: string}>();

  @ViewChild('accountName') accountName!: ElementRef;
  @ViewChild('status') status!: ElementRef;

  onCreateAccount(name: string, status: string) {
    this.addAccount.emit({name, status});
    this.accountName.nativeElement.value = '';
    this.status.nativeElement.value = 'active';
  }
}
