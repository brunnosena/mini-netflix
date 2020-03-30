import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesModel } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MostMoviesService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getPopularMovies(local: string = 'US'): Observable<MoviesModel[]> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('page', '1');
    param = param.append('region', local);

    return this._httpClient.get<MoviesModel[]>(`${environment.urlAPI}/movie/popular`, { params: param });
  }
}
