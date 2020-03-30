import { PersistenceEnum } from './persistence.enum';
import {Serializable} from './serializable';

export class UsersStorage extends Serializable {
  constructor(
    public id?: string,
    public user?: string,
    public pass?: string,
    public name?: string,
    public avatar?: string,
    public favourites?: number[]
  ) {
    super();
  }

  public persistenceKey(): PersistenceEnum {
    return PersistenceEnum.USER;
  }
}
