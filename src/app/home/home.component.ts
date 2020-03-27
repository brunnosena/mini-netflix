import { Component, OnInit } from '@angular/core';
import { MyMovieDateService } from '../services/my-movie-date.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allmovies: any[] ;
  public filteredMovies: any[] ;
  title;
  moviesUrl="/assets/movies.json"

  constructor(private movieService: MyMovieDateService, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(res=>{
      this.allmovies = res;
      console.log(res);
    })
    //throw new Error("Method not implemented.");
  }

  onSelect(allmovie){
    this.route.navigate(['details', allmovie.id])
  }


  filterTitles(){
    if(this.title !=""){
      this.allmovies = this.allmovies.filter(movies=>{
        return movies.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      }
       );
    }
    else{
      this.ngOnInit()
    }

    }




}


// getMovieByTitle(title:string){
//   return this.http.get(this.moviesUrl)
//     .pipe(map(response => {
//       return response.find((item) => (item.title === title));
//     }))
// }
