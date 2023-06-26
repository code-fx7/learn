import { Component, Input, } from '@angular/core';
import { Hamster } from 'src/app/hamster';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrls: ['./friendbox.component.scss']
})
export class FriendboxComponent {
 @Input() myFriends: Hamster[] = [];

}
