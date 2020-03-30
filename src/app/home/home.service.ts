import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageFacade } from '../core/persistence/storage.facade';
import { environment } from 'src/environments/environment';
import { MoviesModel } from '../model/movies';

@Injectable()
export class HomeService {

  constructor(
    private _httpClient: HttpClient,
    private storage: StorageFacade
  ) { }


  public getNowPlaying(): Observable<MoviesModel[]> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('page', '1');

    return this._httpClient.get<MoviesModel[]>(`${environment.urlAPI}/movie/now_playing`, { params: param });
  }


  public searchMovies(value: string): Observable<MoviesModel[]> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('query', value);
    param = param.append('page', '1');

    return this._httpClient.get<MoviesModel[]>(`${environment.urlAPI}/search/movie`, { params: param });
  }

}
