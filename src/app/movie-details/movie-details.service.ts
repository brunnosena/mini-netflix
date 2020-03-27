import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchMoviesModel } from '../model/searchMovies';

@Injectable()
export class MovieDetailsService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public getDetailsMovies(movie_id: number): Observable<SearchMoviesModel> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);

    return this._httpClient.get<SearchMoviesModel>(`${environment.urlAPI}/movie/${movie_id}`, { params: param });
  }


}
