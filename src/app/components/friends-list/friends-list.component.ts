import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@Component({
    selector: 'app-friends-list',
    standalone: true,
    providers: [UserService],
    templateUrl: './friends-list.component.html',
    styleUrl: './friends-list.component.scss',
    imports: [CommonModule, HttpClientModule, LoadingSpinnerComponent]
})
export class FriendsListComponent implements OnInit{
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUserData(15).subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
