import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hamster } from '../hamster';

@Injectable({
  providedIn: 'root'
})
export class FriendStoreService {
    hamsters: Hamster[] = [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    { name: 'Franziska', text: 'Gräbt gerne Löcher', image: 'assets/img/hamster6.jpg' },
    { name: 'Josephine', text: 'Spielt gerne', image: 'assets/img/hamster7.jpg' },
    { name: 'Patrick', text: 'Hamsterrad Freak', image: 'assets/img/hamster8.jpg' },
  ];

  myFriends: Hamster[] = [];

  private myFriendsSubject = new BehaviorSubject<Array<Hamster>>(this.myFriends);
  myFriends$ = this.myFriendsSubject.asObservable();

  addFriend(myFriend: Hamster) {
    myFriend.isMyFriend = true;
    this.myFriends = [...this.myFriends, myFriend];
    this.myFriendsSubject.next(this.myFriends);
  }

  removeFriend(myFriend: Hamster) {
    delete myFriend.isMyFriend;
    this.myFriends = this.myFriends.filter(({name}) => name !== myFriend.name);
    this.myFriendsSubject.next(this.myFriends);
  }
}
