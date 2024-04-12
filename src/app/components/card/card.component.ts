import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../types/user.types';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  currentUser: User | undefined;
  userSubscription: Subscription | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.fetchUserData(1).subscribe((user: User[]) => {
      this.currentUser = user[0];
    });
  }
}
