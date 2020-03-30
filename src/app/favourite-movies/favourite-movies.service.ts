import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchMoviesModel } from '../model/searchMovies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public getDetailsMovies(movie_id: number): Observable<SearchMoviesModel> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('append_to_response', 'videos');

    return this._httpClient.get<SearchMoviesModel>(`${environment.urlAPI}/movie/${movie_id}`, { params: param });
  }
}
