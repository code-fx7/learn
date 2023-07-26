import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  get userName(): string | null {
    return this.authService.userName;
  }

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login('Max');
  }

  logout(): void {
    this.authService.logout();
  }
}
