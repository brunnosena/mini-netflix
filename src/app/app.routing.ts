import { HomeComponent } from './home/home.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotfoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


export const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'favorites', component: FavouriteMoviesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
  ];