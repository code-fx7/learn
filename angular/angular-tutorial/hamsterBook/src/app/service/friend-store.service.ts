import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hamster } from '../hamster';

@Injectable({
  providedIn: 'root'
})

export class FriendStoreService {
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
