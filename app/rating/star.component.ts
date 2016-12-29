import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'star',
  template: `<span class="star" [class.active]="active" (click)="handleRate($event)">&#9733;</span>`,
  styles: [`
    .star {      
      color: #feffff;
      cursor: pointer;
      font-size: 2.4rem;
      transition: color .4s ease-in-out;
    }
    .star.active {
       color: #23708a
    }
  `]
})

export class StarComponent {
  @Input() active: boolean;
  @Input() position: number;
  @Output() rate = new EventEmitter();

  handleRate() {
    this.rate.emit(this.position);
  }
}