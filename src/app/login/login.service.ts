import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { StorageFacade } from '../core/persistence/storage.facade';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  constructor(
    private _httpClient: HttpClient,
    private storage: StorageFacade
  ) { }


  public login(): Observable<any> {

    const response1 = this.setGuestSession();
    const response2 = this.getLogins();

    return forkJoin([response1, response2]);
  }

  private getLogins(): Observable<any> {
    return this._httpClient.get<any[]>(`api/user-users`);
  }


  private setGuestSession(): Observable<any> {
    let param = new HttpParams();
    param = param.append('api_key', environment.api_key);

    return this._httpClient.get<any>(`${environment.urlAPI}/authentication/guest_session/new`, { params: param });
  }


  public deslogar() {
    this.storage.usersStorage = null;
  }
}
