import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map/map.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  providers: [MapService],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.coordinates$.subscribe(coordinates => {
      this.center = coordinates;
    });
  }
}
