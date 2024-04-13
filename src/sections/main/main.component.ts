import { Component } from '@angular/core';
import { CardComponent } from '../../app/components/card/card.component';
import { FriendsListComponent } from '../../app/components/friends-list/friends-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, FriendsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
