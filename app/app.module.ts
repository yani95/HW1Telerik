import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './services/movie.service';
import { MovieModel } from './movie/movie.model';
import { MoviesFilterPipe } from './pipes/movies-filter.pipe';
import { MoviesSortingPipe } from './pipes/movies-sorting.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { StarComponent } from './rating/star.component';
import { StarsComponent } from './rating/stars.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },  
  { path: 'movie/:imdbID', component: MovieDetailsComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        MovieComponent,
        MoviesListComponent,
        MovieDetailsComponent,
        MoviesFilterPipe,
        MoviesSortingPipe,
        StarComponent,
        StarsComponent,
        FooterComponent
    ],
    providers: [ MovieService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }