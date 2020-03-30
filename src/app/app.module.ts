import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './core/services/fake-db.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralService } from './services/general.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './not-found/not-found.component';
import { HomeService } from './home/home.service';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { FooterComponent } from './footer/footer.component';
import { PersistenceService } from './core/persistence';
import { StorageFacade } from './core/persistence/storage.facade';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MovieDetailsService } from './movie-details/movie-details.service';
import { FavouriteMoviesService } from './favourite-movies/favourite-movies.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    NavbarComponent,
    NotfoundComponent,
    FavouriteMoviesComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
  }),
  ],
  providers: [
    HomeService,
    LoginService,
    MovieDetailsService,
    GeneralService,
    FavouriteMoviesService,
    PersistenceService,
    StorageFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
