import { Injectable } from '@angular/core';

import { Serializable } from '../model/serializable';
import { PersistenceEnum } from '../model/persistence.enum';

@Injectable()
export class PersistenceService {
  public buscar<T>(key: PersistenceEnum): T {
    return JSON.parse(window.localStorage.getItem(key));
  }

  public salvar<T>(key: PersistenceEnum, t: T): void {
    window.localStorage.setItem(key, JSON.stringify(t));
  }

  public remover(key: string): void {
    window.localStorage.removeItem(key);
  }

  public deserializar(s: Serializable): Serializable {
    const jsonLocalStorage: string = window.localStorage.getItem(s.persistenceKey());
    return s.fillFromJSON(jsonLocalStorage);
  }

  public serializar(s: Serializable): void {
    window.localStorage.setItem(s.persistenceKey(), JSON.stringify(s));
  }

  public limparTudo(): void{
    window.localStorage.clear();
  }
}