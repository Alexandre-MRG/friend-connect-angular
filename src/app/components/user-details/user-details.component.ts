import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
    this.userDetailsService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }
}
