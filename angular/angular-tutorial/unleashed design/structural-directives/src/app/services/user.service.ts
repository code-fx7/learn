import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/User.interface';
import { UserRole } from '../core/enums/UserRole.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  public get getUser$(): Observable<User> {
    return this._user.asObservable();
  }

  public set(): void {
    this._user.next({
      id: 1,
      name: 'John',
      role: [UserRole.User],
    });
  }

  public reset() {
    this._user.next(null);
  }

  public makeAdmin(): void {
    this._user.next({
      id: 1,
      name: 'John',
      role: [UserRole.User, UserRole.Admin],
    });
  }

  public makeUser(): void {
    this._user.next({
      id: 1,
      name: 'John',
      role: [UserRole.User],
    });
  }

  constructor() { }
}
