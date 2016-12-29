import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movie/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styles: ['h1 { font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif }']
})

export class MoviesListComponent implements OnInit {
    private movies: MovieModel[];
    private pageTitle: string;
    private filterText: string;
    private sortingProperties: string[];
    private sortingProperty: string;
    private order: string;

    constructor(private moviesService: MovieService) { }

    ngOnInit() {
        this.pageTitle = 'Movies Catalog';        
        this.sortingProperties = ['Rating', 'Title', 'Year'];
        this.sortingProperty = 'Rating';
        this.order = 'desc';
        this.moviesService.GetAll()
            .subscribe((response:any) => this.movies = response);
    }

    onFilterInput(e: any) {
        this.filterText = e.target.value;
    }

    onSortChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onOrderChange(e: any) {
        this.order = e.target.value;
    }
}