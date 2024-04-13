import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../models/response.model';
import { User } from '../models/user.model';

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


