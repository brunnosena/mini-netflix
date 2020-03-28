import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Builder } from 'builder-pattern';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage, FavouritesStorage } from '../core/persistence';



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

      const fav = user.favourites;
      const favorites = user.favourites.find(e => e.movie_id !== movie.id);
      if (fav.length > 0) {
        fav.push(favorites);
      }
      console.log(fav, favorites)

      const params: UsersStorage = Builder<UsersStorage>()
                  .id(user.id)
                  .user(user.user)
                  .pass(user.pass)
                  .name(user.name)
                  .avatar(user.avatar)
                  .favourites(this.buildFavourites(fav))
                  .build();

      this.storage.usersStorage = params;

      return of({})

      // return this._httpClient.post<any>('api/user-favourites/' + user.id.toString(), body);
    }


    private buildFavourites(movie) {
      return [
        Builder<FavouritesStorage>()
        .movie_id(movie.id).build()
      ]
    }

}
