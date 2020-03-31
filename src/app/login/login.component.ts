import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Builder } from 'builder-pattern';
import { LoginService } from './login.service';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage } from '../core/persistence';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _loginService: LoginService,
    private storage: StorageFacade
  ) { }

  ngOnInit() {
    this._loginService.deslogar();
  }

  public login(user: number): void {

    this._loginService.login()
      .subscribe(
        next => this.tratarSucesso(next, user),
        err => this.tratarErro(err)
      );
  }

  public tratarSucesso(next: any, position: number): void {
    const params: UsersStorage = Builder<UsersStorage>()
      .id(next[1][position].id)
      .user(next[1][position].user)
      .pass(next[1][position].pass)
      .name(next[1][position].name)
      .avatar(next[1][position].avatar)
      .favourites(this.tratarFavourites(next[1][position].favourites))
      .session_id(next[1][position].session_id)
      .guest_session(next[0].guest_session_id)
      .build();

    this.storage.usersStorage = params;

    this.router.navigate(['/']);
  }


  private tratarFavourites(favourites: any) {
    return !!favourites  && favourites.results.length > 0
      ? favourites.results.map(fav => fav.id)
      : [];
  }

  public tratarErro(err: any): void {
    console.log(err);
  }




}
