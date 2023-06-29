import { Component } from "@angular/core";
import { combineLatest } from "rxjs";
import { map } from 'rxjs/operators';
import { Hamster } from "../../hamster";
import { FriendStoreService } from "../../service/friend-store.service";
import { HamsterStoreService } from "../../service/hamster-store.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  vm$ = combineLatest([
    this.friendStoreService.myFriends$,
    this.hamsterStoreService.hamsters$
  ]).pipe(
    map(([myFriends, hamsters]) => ({myFriends, hamsters}))
  );

  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
    'Ich esse gern Kekse.'
  ];

  postImages = [
    'assets/img/hamster1.jpg',
    'assets/img/hamster2.jpg',
    'assets/img/hamster3.jpg',
    'assets/img/hamster4.jpg'
  ];

  constructor(private friendStoreService: FriendStoreService, private hamsterStoreService: HamsterStoreService) {}

  addFriend(hamster: Hamster) {
    this.friendStoreService.addFriend(hamster);
  }

  removeFriend(hamster: Hamster) {
    this.friendStoreService.removeFriend(hamster);
  }
}
