import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage } from '../core/persistence';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public user: UsersStorage;

  constructor(
    private storage: StorageFacade,
    private router: Router,
    private _loginService: LoginService
  ) {  }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.user = this.storage.usersStorage;
  }


  public logoff() {
    this._loginService.deslogar();
    this.load();
    this.router.navigate(['/login']);
  }
}
