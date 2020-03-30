import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './core/services/fake-db.service';
import { PersistenceService } from './core/persistence';
import { StorageFacade } from './core/persistence/storage.facade';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { GeneralService } from './services/general.service';
import { NotfoundComponent } from './not-found/not-found.component';
import { HomeService } from './home/home.service';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MovieDetailsService } from './movie-details/movie-details.service';
import { FavouriteMoviesService } from './favourite-movies/favourite-movies.service';
import { AuthGuard } from './core/_guards/auth.guard';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopRatedMoviesService } from './top-rated-movies/top-rated-movies.service';
import { MostMoviesComponent } from './most-movies/most-movies.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    NotfoundComponent,
    FavouriteMoviesComponent,
    LoginComponent,
    TopRatedMoviesComponent,
    MostMoviesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NavbarModule,
    FooterModule,

    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    })
  ],
  providers: [
    HomeService,
    LoginService,
    MovieDetailsService,
    GeneralService,
    FavouriteMoviesService,
    TopRatedMoviesService,
    PersistenceService,
    StorageFacade,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
