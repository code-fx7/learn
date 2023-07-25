import { Component } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'structural-directives';
  constructor(private userService: UserService) {}

  makeAdmin() {
    this.userService.makeAdmin();
  }

  makeUser() {
    this.userService.makeUser();
  }

  set() {
    this.userService.setUser('John', Role.User)
  }

  reset() {
    this.userService.resetUser();
  }
}
