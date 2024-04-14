import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }


  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  getState(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
}
