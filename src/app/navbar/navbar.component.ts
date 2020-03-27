import { Component, OnInit } from '@angular/core';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage } from '../core/persistence';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public user: UsersStorage;

  constructor(
    private storage: StorageFacade
  ) {
    this.user = storage.usersStorage;
  }

  ngOnInit() {
  }

}
