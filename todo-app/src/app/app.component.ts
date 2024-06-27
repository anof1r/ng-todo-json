import { Component, OnInit  } from '@angular/core';
import { Card } from './shared/data.model';
import { CardService } from './shared/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div *ngFor="let card of cards" class="card">
        <h2>{{ card.name }}</h2>
        <p>{{ card.description }}</p>
        <p>Release Date: {{ card.release_date }}</p>
      </div>
    </div>`
})
export class AppComponent implements OnInit{
  title = 'todolist';
  cards: Card[] = [];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.loadСards();
  }

  loadСards(): void {
    this.cardService.getFrameworks()
      .subscribe(data => {
        this.cards = data;
      });
  }
}
