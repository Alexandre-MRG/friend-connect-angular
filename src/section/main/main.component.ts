import { Component } from '@angular/core';
import { CardComponent } from '../../app/components/card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
