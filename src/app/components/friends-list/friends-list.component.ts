import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { MapService } from '../../services/map/map.service';

@Component({
    selector: 'app-friends-list',
    standalone: true,
    providers: [UserService, MapService],
    templateUrl: './friends-list.component.html',
    styleUrl: './friends-list.component.scss',
    imports: [CommonModule, HttpClientModule, LoadingSpinnerComponent]
})
export class FriendsListComponent implements OnInit{
  users: User[] = [];
  constructor(private userService: UserService, private userDetailsService: UserDetailsService, private mapService: MapService) { }

  ngOnInit(): void {
    this.userService.fetchUserData(15).subscribe((users: User[]) => {
      this.users = users;
    });
  }

  sendUserData(user: User): void {
    this.userDetailsService.setCurrentUser(user);
    const latitude = parseFloat(user.location.coordinates.latitude);
    const longitude = parseFloat(user.location.coordinates.longitude);
    this.mapService.updateCoordinates({ lat: latitude, lng: longitude });
  }
}
