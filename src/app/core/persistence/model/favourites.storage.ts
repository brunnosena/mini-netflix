import { PersistenceEnum } from './persistence.enum';
import {Serializable} from './serializable';

export class FavouritesStorage extends Serializable {
  constructor(
    public lang?: string
  ) {
    super();
  }

  public persistenceKey(): PersistenceEnum {
    return PersistenceEnum.FAVOURITES;
  }
}
