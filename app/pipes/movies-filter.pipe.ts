import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { MovieModel } from '../movie/movie.model';

@Pipe({
    name: 'moviesFilter'    
})

@Injectable()
export class MoviesFilterPipe implements PipeTransform {
    transform(movies: MovieModel[], filterValue: string): MovieModel[] {
        if(!filterValue) {
            return movies;
        }
        return movies.filter(item => item.Title.toLowerCase()
        .indexOf(filterValue.toLowerCase()) > -1);        
    }
}