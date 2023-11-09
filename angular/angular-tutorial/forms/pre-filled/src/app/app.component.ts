import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userData = {
    email: 'test@test.de',
    address: 'Musterstr. 1, 12345 Musterort',
    mobile: '123456789'
  }

  onSubmit(data: any) {
    console.warn("form data", data)
  }
}
