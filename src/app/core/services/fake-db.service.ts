import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UsersFakeDb } from 'src/app/core/fake-db/users';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // user
            'user-users'  : UsersFakeDb.users,
            'user-favourites'  : UsersFakeDb.favourites
        };
    }
}
