import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return new Observable<any>();
  }

  register(email: string, password: string, name: string): Observable<any> {
    return new Observable<any>();
  }
}
