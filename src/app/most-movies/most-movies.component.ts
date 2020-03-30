import { Component, OnInit } from '@angular/core';
import { MostMoviesService } from './most-movies.service';
import { SearchMoviesModel } from '../model/searchMovies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-movies',
  templateUrl: './most-movies.component.html',
  styleUrls: ['./most-movies.component.css']
})
export class MostMoviesComponent implements OnInit {
  public movies: SearchMoviesModel[] = [];

  constructor(
    private router: Router,
    private _service: MostMoviesService
  ) { }

  ngOnInit() {
    this.getPopular('US');    
  }

  getPopular(locate: string) {
    this._service.getPopularMovies(locate)
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

    this.getPopular(locality);
  }

}
