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


    favor(movie) {
      const user: UsersStorage = this.storage.usersStorage || null;
      if (user === null) {
        return throwError('invalid ID');
      }     
      
      const body = JSON.stringify({
        id: user.id.toString(),
        fav: movie.id
      });
    


      return this._httpClient.post<any>('api/user-favourites/' + user.id.toString(), body);
    }



}
