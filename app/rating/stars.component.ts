import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { StarComponent } from '../rating/star.component';

@Component({
  selector: 'stars',
  template: `
    <span class="stars">
      <star
        *ngFor="let star of stars"
        [active]="star <= rating"
        (rate)="onRate($event)"
        [position]="star"
      >
      </star>
    </span>
  `,
  styles:[`.stars{margin: 0 auto;}`]
})

export class StarsComponent {
  @Input() starCount: number;
  @Input() rating: number;
  @Output() rate = new EventEmitter();
  stars: number[] = [1,2,3,4,5,6,7,8,9,10];
  _rating = this.rating;

  constructor() {
    const count = this.starCount < 0 ? 5 : this.starCount;
  }

  onRate(star: number) {
    this.rate.emit(star);
    this._rating = star;
  }
}