import { HomeComponent } from './home/home.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotfoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/_guards/auth.guard';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { MostMoviesComponent } from './most-movies/most-movies.component';


export const appRoutes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'movies/:id/favourites', component: FavouriteMoviesComponent, canActivate: [AuthGuard] },
    { path: 'top-rated-movies', component: TopRatedMoviesComponent, canActivate: [AuthGuard] },
    { path: 'most-movies', component: MostMoviesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'details/:id', component: MovieDetailsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
  ];