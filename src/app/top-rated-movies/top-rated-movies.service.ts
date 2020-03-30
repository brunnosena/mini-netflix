import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchMoviesModel } from '../model/searchMovies';


@Injectable()
export class TopRatedMoviesService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public getTopRatedMovies(local: string = 'US'): Observable<SearchMoviesModel> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('region', local);

    return this._httpClient.get<SearchMoviesModel>(`${environment.urlAPI}/movie/top_rated`, { params: param });
  }

}
