import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userItemTemplate: any;

  users = [
    { name: 'John Doe', email: 'john@example.com', avatar: 'avatar1.jpg' },
    { name: 'Jane Doe', email: 'jane@example.com', avatar: 'avatar2.jpg' },
    { name: 'Bob Smith', email: 'bob@example.com', avatar: 'avatar3.jpg' }
  ];

  logUserData(user: any) {
    console.log('User data:', user);
  }
}
