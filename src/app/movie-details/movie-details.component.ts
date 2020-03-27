import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyMovieDateService } from '../services/my-movie-date.service';
import { moviesModel } from '../model/IMovies';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: moviesModel;
  @Input('isActive') isActive: boolean;
  moviesUrl="/assets/movies.json"
  constructor(private route: ActivatedRoute, private movieservice: MyMovieDateService, private http: HttpClient) { }

  ngOnInit() {
    let id:number = parseInt(this.route.snapshot.params['id']);
     this.movieservice.getMovieByID(id).subscribe((result) =>{
      this.selectedMovie = result;
      console.log(result);
      (err:any)=>console.log(err)
    })
    //const id = +this.route.snapshot.params['id'];
    //this.selectedMovie = this.movieservice.getMovieByID(id);
    //console.log(this.selectedMovie)

  }

  onclick(){
    this.isActive = !this.isActive;
  }

}
