import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../types/user.types';
import { ApiResponse } from '../types/response.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  constructor(private http: HttpClient) { }

  fetchUserData(quantity: number): Observable<User[]> {
    return this.http.get<ApiResponse>(`https://randomuser.me/api/?results=${quantity}`).pipe(
      map((response) => response.results)
    );
  }

}


