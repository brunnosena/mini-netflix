import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageFacade } from '../core/persistence/storage.facade';

@Injectable()
export class LoginService {

  constructor(
    private _httpClient: HttpClient,
    private storage: StorageFacade
  ) { }


  public login(user: string, pass: string): Observable<any> {
    return this._httpClient.get<any[]>(`api/user-users?user=${user}&pass=${pass}`);
  }


  public deslogar() {
    this.storage.usersStorage = null;
  }
}
