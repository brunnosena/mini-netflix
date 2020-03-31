import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Builder } from 'builder-pattern';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage } from '../core/persistence';
import { environment } from 'src/environments/environment';



@Injectable()
export class GeneralService {

  constructor(
    private _httpClient: HttpClient,
    private storage: StorageFacade,

  ) { }

  setFavor(sessionId: string, movieId: number): Observable<any> {

    const body = JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      favorite: true
    });

    const header = new HttpHeaders()
        .set('Content-Type', 'application/json');

    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);
    param = param.append('session_id', sessionId);

    return this._httpClient.post<any>(`${environment.urlAPI}/account/9172698/favorite/`, body, { params: param, headers: header });
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
      // this.setFavor(user.session_id, movie.id)
      // .pipe(
      //   switchMap(val => (val ? favourites.push(movie.id) : val))
      // ).subscribe(
      //   res => {},
      //   err => throwError(err)
      // );
    }

    const params: UsersStorage = Builder<UsersStorage>()
      .id(user.id)
      .user(user.user)
      .pass(user.pass)
      .name(user.name)
      .avatar(user.avatar)
      .favourites(favourites)
      .session_id(user.session_id)
      .guest_session(user.guest_session)
      .build();

    this.storage.usersStorage = params;

    return of({})
  }

}
