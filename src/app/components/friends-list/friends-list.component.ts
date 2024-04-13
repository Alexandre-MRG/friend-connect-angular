import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss'
})
export class FriendsListComponent {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUserData(15).subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
