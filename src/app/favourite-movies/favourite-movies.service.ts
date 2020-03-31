import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchMoviesModel } from '../model/searchMovies';
import { environment } from 'src/environments/environment';
import { FavouritesMoviesModel } from '../model/favoriteMovies';

@Injectable()
export class FavouriteMoviesService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public getFavouritesMovies(session_id: string): Observable<FavouritesMoviesModel> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('session_id', session_id);
    param = param.append('sort_by', 'created_at.asc');

    return this._httpClient.get<FavouritesMoviesModel>(`${environment.urlAPI}/account/%7Baccount_id%7D/favorite/movies`, { params: param });
  }

  public getDetailsMovies(movie_id: number): Observable<SearchMoviesModel> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('append_to_response', 'videos');

    return this._httpClient.get<SearchMoviesModel>(`${environment.urlAPI}/movie/${movie_id}`, { params: param });
  }
}
