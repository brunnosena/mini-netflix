# Mini-Netflix ( Angular 8 )
## MiniNetflix


Application created with Angular 8.
Usage one external API, for consuming the movies.

The application makes available login and favorites .by user.

## Basic Informations:

- [MOVIES API](https://www.themoviedb.org/documentation/api)

Data Users:\
The data of the users are located in database fake in `src/app/core/fake-db/users.ts`

## Routes
- Home
- Details Movie
- Login
- Favourites

## Users
- Jack Smith
- Paul Ryan

## Development server
Run `npm install` for install dependecy.

Run `ng test` for run unitary tests. ```(Tests tested only at login.component.ts)```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


# Architecture

`core` - Directory where dbfake, persistence, and storagefacade is located

`pages of navigation` - favourite-movies, home, login, most-movies, movie-details, not-found

`services` - Each component directory, there is its own service

`routes` - One archive of routes, for all project

`commom components` - The 'navbar' and 'footer', components are common to all projects. Modules were created for this work

`assets` - In this folder, are the images and logos used in project.


`tests` - One test was created in `login.component.spec.ts` for show the knowlledge with Karma and Jasmine. Was created too one 'stub' for mocked the data. Was tested component and services called.