import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MovieDetailsService } from './movie-details.service';
import { SearchMoviesModel } from '../model/searchMovies';
import { GeneralService } from '../services/general.service';
import { StorageFacade } from '../core/persistence/storage.facade';
import { ModalResult } from '../model/modalResult';
import { ModalAction } from '../model/modalAction';
import { UsersStorage } from '../core/persistence';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Output('closed') closeEmitter: EventEmitter<ModalResult> = new EventEmitter<ModalResult>();

  public user: UsersStorage;
  public movie: SearchMoviesModel;
  private idMovie: number;
  public isActive: boolean;
  public showModal: boolean;

  public frame: SafeUrl;

  public movie_video = {
    description: null,
    key: null
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private storage: StorageFacade,
    private _movieDetailsService: MovieDetailsService,
    private _service: GeneralService
  ) {
    this.idMovie = Number(this.route.snapshot.params.id);
    this.getDetail(this.idMovie);
  }

  ngOnInit() {
    this.user = this.storage.usersStorage;
    this.isActive = !!this.storage.usersStorage ? this.storage.usersStorage.favourites.some(active => active === this.idMovie) : false;   
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

    this.movie_video.description = next.title;
    this.movie_video.key = next.videos.results[0].key;
    this.frame = this.sanitizer.bypassSecurityTrustResourceUrl
            ('http://www.youtube.com/embed/' + next.videos.results[0].key + '?showinfo=0&enablejsapi=1&origin=http://localhost:4200');
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
      );
  }


  private tratarSucesso(next: any): void {
    console.log(next);
    this.isActive = !this.isActive;
    
  }

  private tratarErro(err: any): void {
    alert('Você não está logado, faça login, e tente novamente.')
    // this.router.navigate(['login']);
  }

  public playVideo(movie) {
    this.showModal = true;

    this.movie_video = {
      description: movie.title,
      key: movie.videos.results[0].key,
    }
  }

  cancelAction() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.CANCEL
    });
    return false;
  }

  // savePlayer(player) {
  //   this.player = player;
  //   console.log('player instance', player);
  // }
  // onStateChange(event) {
  //   console.log('player state', event.data);
  // }

}