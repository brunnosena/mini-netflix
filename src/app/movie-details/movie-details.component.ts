import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsService } from './movie-details.service';
import { SearchMoviesModel } from '../model/searchMovies';
import { GeneralService } from '../services/general.service';
import { StorageFacade } from '../core/persistence/storage.facade';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: SearchMoviesModel;
  private id_movie: number;
  public isActive: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageFacade,
    private _movieDetailsService: MovieDetailsService,
    private _service: GeneralService
  ) {  }

  ngOnInit() {
    this.id_movie = Number(this.route.snapshot.params.id);
    this.isActive = !!this.storage.usersStorage ? this.storage.usersStorage.favourites.some(active => active === this.id_movie) : false;
    this.getDetail(this.id_movie);
  }


  public getDetail(id: number) {
    this._movieDetailsService.getDetailsMovies(id)
      .subscribe(
        next => this.successPopularMovies(next),
        err => this.errPopularMovies(err),
      )

  }

  private successPopularMovies(next: any) {
    this.movie = null;
    this.movie = next;
  }

  public tratarImagemItem(event) {
    event.onerror = null;
    event.src = 'assets/images/not-found.jpeg';
    return event;
  }

  private errPopularMovies(err: any) {
    alert('error has occurred the try return movies');
    this.router.navigate(['/']);
  }

  public goback() {
    this.router.navigate(['/']);
  }

  public favorite(movie: SearchMoviesModel) {
    this._service.favor(movie)
    .subscribe(
      next => this.tratarSucesso(next),
      err => this.tratarErro(err)
    )
  }


  private tratarSucesso(next: any): void {
    console.log(next);
    this.isActive = !this.isActive;
  }

  private tratarErro(err: any): void {
    alert('Você não está logado, faça login, e tente novamente.')
    // this.router.navigate(['login']);
  }


}
