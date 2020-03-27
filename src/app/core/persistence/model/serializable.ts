import { PersistenceEnum } from './persistence.enum';

export abstract class Serializable {

  public abstract persistenceKey(): PersistenceEnum;

  public fillFromJSON(json: string) {
    if (!json || json.length === 0) return null;
    const jsonObj = JSON.parse(json);
    for (const propName in jsonObj) {
      if (this.hasOwnProperty(propName)) {
        this[propName] = jsonObj[propName];
      }

    }
    return this;
  }
}
