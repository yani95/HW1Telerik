import { Component, Input } from '@angular/core';
import { MovieModel } from '../movie/movie.model';
import { MovieService } from '../services/movie.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']  
})

export class MovieDetailsComponent {
  @Input() movie: MovieModel;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.ReloadMovies();
  }

  ReloadMovies() {
    this.route.params
    .switchMap((params: Params) => this.movieService.GetById(params['imdbID']))
    .subscribe(
      movie => {
        this.movie = movie;
      },
      error => console.error(error)
      );
  }

  goToMovies() {
    let movieId = this.movie ? this.movie.imdbID : null;
    this.router.navigate(['/movies']);
  }
}