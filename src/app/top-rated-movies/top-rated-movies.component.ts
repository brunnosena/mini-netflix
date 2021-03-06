import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopRatedMoviesService } from './top-rated-movies.service';
import { SearchMoviesModel } from '../model/searchMovies';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  public movies: SearchMoviesModel[] = [];

  constructor(
    private router: Router,
    private _service: TopRatedMoviesService
  ) { }

  ngOnInit() {
    this.getTopRated('');
  }

  getTopRated(locality) {
    this.movies = [];
    this._service.getTopRatedMovies(locality)
    .subscribe(
      data => this.movies = data['results'],
      err => this.errPopularMovies(err),
    )
  }


  private errPopularMovies(err: any) {
    alert('error has occurred the try return movies');
    this.router.navigate(['/']);
  }


  onSelect(allmovie) {
    this.router.navigate(['details', allmovie.id])
  }

  public tratarImagemItem(event) {
    event.onerror = null;
    event.src = 'assets/images/not-found.jpeg';
    return event;
  }


  selectCountry(event) {
    const locality = event.target.value;

    this.getTopRated(locality);
  }


}
