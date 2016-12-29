import { Component, Input, Output } from '@angular/core';
import { MovieModel } from './movie.model';

@Component({
    selector: '[movie]',
    templateUrl: './movie.component.html',
})

export class MovieComponent {    
    @Input() movie: MovieModel;   
    @Input() rating: number;
}