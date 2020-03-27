import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MyMovieDateService } from './services/my-movie-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public allmovies: any[] ;

  constructor(private movieService: MyMovieDateService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(res=>{
      this.allmovies = res;
      console.log(res);
    })
    //throw new Error("Method not implemented.");
  }
  title = 'Mini-Netflix';
}
