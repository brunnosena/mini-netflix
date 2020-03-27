import { Injectable } from '@angular/core';
import {
  UsersStorage,
  FavouritesStorage
} from '.';
import { PersistenceEnum } from './model/persistence.enum';
import { PersistenceService } from './services/persistence.service';


@Injectable()
export class StorageFacade {

  constructor(
    private persistenceService: PersistenceService) { }


  get usersStorage(): UsersStorage {
    return this.persistenceService.deserializar(new UsersStorage());
  }

  set usersStorage(usersStorage: UsersStorage) {
    if (usersStorage) {
      this.persistenceService.salvar(PersistenceEnum.USER, usersStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.USER);
    }
  }

  get favouritesStorage(): FavouritesStorage {
    return this.persistenceService.deserializar(new FavouritesStorage());
  }

  set favouritesStorage(favouritesStorage: FavouritesStorage) {
    if (favouritesStorage) {
      this.persistenceService.salvar(PersistenceEnum.FAVOURITES, favouritesStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.FAVOURITES);
    }
  }
}
