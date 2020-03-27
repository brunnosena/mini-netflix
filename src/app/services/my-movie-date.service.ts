import { Injectable } from '@angular/core';

import { moviesModel } from '../model/IMovies';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MyMovieDateService {

  moviesUrl="/assets/movies.json"
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<moviesModel[]>{
    return this.http.get<moviesModel[]>(this.moviesUrl, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        //'Authorization': "Bearer " + token
      })
    });
  }

  getMovieByIDs(id:number): Observable<moviesModel>{
    return this.http.get<moviesModel>('/assets/movies.json?id='+id);
  }

  getMovieByID(id: number) {
    return this.http.get<Array<moviesModel>>(this.moviesUrl)
      .pipe(
        map((items: Array<moviesModel>) => {
          return items.find((item: moviesModel) => {
            return item.id === id;
          });
        })
      );
  }


}
