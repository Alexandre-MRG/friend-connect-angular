import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private coordinatesSubject = new BehaviorSubject<{ lat: number, lng: number }>({ lat: 50, lng: 6 });
  coordinates$ = this.coordinatesSubject;

  constructor() { }

  updateCoordinates(coordinates: { lat: number, lng: number }): void {
    this.coordinatesSubject.next(coordinates);
    console.log(coordinates);
  }

  getCurrentCoordinates(): Observable<{ lat: number, lng: number }> {
    return this.coordinatesSubject.asObservable();
  }
}
