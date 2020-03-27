import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageFacade } from '../core/persistence/storage.facade';
import { SearchMoviesModel } from '../model/searchMovies';
import { UsersStorage } from '../core/persistence';



@Injectable()
export class GeneralService {
  
  constructor(
    private _httpClient: HttpClient,
    private storage: StorageFacade

    ) { 

    }


    public favor(movie: SearchMoviesModel) {
      const user: UsersStorage = this.storage.usersStorage;
      // if (user === null) {
      //   return throwError("invalid ID");
      // }
      
      const body = JSON.stringify({fav: movie.id});


      return this._httpClient.post<any>('api/user-favourites/' + user.id, {...[body]});
    }



}
