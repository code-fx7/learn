import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
  // Event Emitter
  // activatedEmitter = new EventEmitter<boolean>();

  // Subject
  activatedEmitter = new Subject<boolean>();
}
