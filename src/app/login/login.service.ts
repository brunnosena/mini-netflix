import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  public login(user: string, pass: string): Observable<any> {    
    return this._httpClient.get<any[]>('api/user-users');
    // .subscribe(todos => console.log(todos));
  }
}
