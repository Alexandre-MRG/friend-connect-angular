import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(private http: HttpClient) { }

  fetchUserData(quantity: number): Observable<User[]> {
    return this.http.get(`https://randomuser.me/api/?results=${quantity}`).pipe(
      map((response: any) => response.results)
    );
  }

}


