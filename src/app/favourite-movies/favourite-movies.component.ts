import { Component, OnInit } from '@angular/core';
import { StorageFacade } from '../core/persistence/storage.facade';
import { UsersStorage } from '../core/persistence';
import { Router } from '@angular/router';
import { FavouriteMoviesService } from './favourite-movies.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
  public user: UsersStorage;
  public movies = [];

  constructor(
    private router: Router,
    private storage: StorageFacade,
    private _service: FavouriteMoviesService
  ) { }

  ngOnInit() {
    if (!this.storage) this.router.navigate(['login']);
    this.user = this.storage.usersStorage;
    this.getFavourites(this.user.favourites);
  }

  getFavourites(fav) {

    if (fav.length > 0) {
      fav.map(f => {

        this._service.getDetailsMovies(f)
      .subscribe(
        next => this.movies.push(next),
        err => this.errPopularMovies(err),
      )

      })
    }
  }


  private errPopularMovies(err: any) {
    alert('error has occurred the try return movies');
  }

  onSelect(allmovie) {
    this.router.navigate(['details', allmovie.id])
  }

  public tratarImagemItem(event) {
    event.onerror = null;
    event.src = 'assets/images/not-found.jpeg';
    return event;
  }

}
