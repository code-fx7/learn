import { Injectable } from '@angular/core';
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

  addFriend(myFriend: Hamster): Hamster[] {
    myFriend.isMyFriend = true;
    this.myFriends = [...this.myFriends, myFriend];
    return this.myFriends;
  }

  removeFriend(myFriend: Hamster): Hamster[] {
    delete myFriend.isMyFriend;
    this.myFriends = this.myFriends.filter(({name}) => name !== myFriend.name);
    return this.myFriends;
  }
}
