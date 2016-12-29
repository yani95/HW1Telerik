import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import { MovieModel } from '../movie/movie.model';

@Injectable()
export class MovieService {
    constructor(private http: Http) { }
   
    GetAll(): Observable<MovieModel[]> {
        return this.http.get('../data/movies.json')
            .map((response: Response) => <MovieModel[]>response.json());
    }

    GetById(imdbID: string): Observable<MovieModel> {
        return this.http.get("http://omdbapi.com/?i=" + imdbID + "&plot=full&r=json")
            .map((res:any) => res.json());
    } 

    // private headers = new Headers({'Content-Type': 'application/json'});
    // GetById(Top250: string): Observable<MovieModel> {
    //     return this.http.get("../data/movies.json" + "/" + Top250, {headers: this.headers})
    //     // http://localhost:3000/movie
    //         .map((res: Response) => <MovieModel>res.json());
    // } 
}