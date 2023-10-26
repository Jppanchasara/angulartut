import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendingMovies:any;
  theatresMovies:any;
  popularMovies: any;
  constructor( private http:HttpClient, private router:Router){}
  ngOnInit():void{
    this.getTrendingMovies();
    this.gettheatreMovie();
    this.getPopularMovies();
  }

  // ngOnInit():void{
  //   this.getTrendingMovies();
  // }
  getTrendingMovies(){
   
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movie)=>{
      this.trendingMovies=movie;
      console.warn(this.trendingMovies);
    });
      

  }
  gettheatreMovie(){
   
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((theatres)=>{
      this.theatresMovies=theatres;
      console.warn(this.theatresMovies);
    });
      

  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

}
