import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FriendStoreService } from '../../service/friend-store.service';
import { HamsterCardComponent } from '../hamster-card/hamster-card.component';
import { Hamster } from 'src/app/hamster';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() hamster: Hamster = {
    name: 'Frederick',
    image: '/assets/img/hamster4.jpg',
    text: '3 Jahre alt'
  };
  @Input() canFollow = true;

  @Output() follow = new EventEmitter<void>();
  @Output() unfollow = new EventEmitter<void>();

  handleFollow(): void {
    this.follow.emit();
  }

  handleUnfollow(): void {
    this.unfollow.emit();
  }
}