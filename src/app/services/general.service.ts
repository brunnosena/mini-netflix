import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Builder } from 'builder-pattern';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage, FavouritesStorage } from '../core/persistence';



@Injectable()
export class GeneralService {

  constructor(
    private storage: StorageFacade

  ) {

  }


  favor(movie) {
    const user: UsersStorage = this.storage.usersStorage || null;
    if (user === null) {
      return throwError('invalid ID');
    }

    let favourites = user.favourites;
    const hasFavorites = favourites.some(e => e === movie.id);

    if (hasFavorites)  {
      favourites = favourites.filter(f => f !== movie.id);
    } else {
      favourites.push(movie.id);
    }

    const params: UsersStorage = Builder<UsersStorage>()
      .id(user.id)
      .user(user.user)
      .pass(user.pass)
      .name(user.name)
      .avatar(user.avatar)
      .favourites(favourites)
      .build();

    this.storage.usersStorage = params;

    return of({})
  }

}
