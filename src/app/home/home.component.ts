import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { MoviesModel } from '../model/movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: MoviesModel[];

  constructor(
    private _homeService: HomeService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  public getPopularMovies() {
    this._homeService.getPopularMovies()
      .subscribe(
        next => this.successPopularMovies(next),
        err => this.errPopularMovies(err),
      )
  }

  public searchMovie(value: string) {
    this._homeService.searchMovies(value)
      .subscribe(
        next => this.successPopularMovies(next),
        err => this.errPopularMovies(err),
      )
  }

  private successPopularMovies(next: any) {
    if (next.results.length === this.movies) return false;

    this.movies = [];
    this.movies = next.results;
  }


  private errPopularMovies(err: any) {
    alert('error has occurred the try return movies');
  }

  onSelect(allmovie) {
    this.route.navigate(['details', allmovie.id])
  }

  public tratarImagemItem(event) {
    event.onerror = null;
    event.src = 'assets/images/not-found.jpeg';
    return event;
  }


  filterTitles(event: any) {
    console.log(event.keyCode)
    if (event.target.value.length >= 3) {
      this.searchMovie(event.target.value);
    } else if (event.target.value.length === 0) {
      this.getPopularMovies();
    }
  }

}
