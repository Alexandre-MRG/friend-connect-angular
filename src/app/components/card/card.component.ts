import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  user: any; // Define a property to store the user data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.http.get('https://randomuser.me/api/?results=1')
      .subscribe((response: any) => {
        this.user = response.results[0]; // Assign the first user from the API response to the user property
      });
  }
}
