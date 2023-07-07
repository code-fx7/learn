import { Component, Input, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() sidenav!: MatSidenav;
  // @Input() bottomSheet: MatBottomSheet;
  
  toogleSidenav() {
    this.sidenav.toggle();
  }

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open
  }
}
