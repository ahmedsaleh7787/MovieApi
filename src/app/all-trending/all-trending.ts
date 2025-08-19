import { Component, inject, signal } from '@angular/core';
import { Slider } from "../slider/slider";
import { Movieapiinterface } from '../interfaces/movieapiinterface';
import { Alltringingmovies } from '../services/alltringingmovies';



@Component({
  selector: 'app-all-trending',
  imports: [Slider],
  templateUrl: './all-trending.html',
  styleUrl: './all-trending.scss',
})

export class AllTrending{

path:Alltringingmovies=inject(Alltringingmovies)
pathtrending:string=this.path.path;

constructor(private post:Alltringingmovies){}

AllTrendingMovies=signal<Movieapiinterface[]>([]);

ngOnInit(){
this.showdata();
}

showdata(){
  this.post.getdata("all").subscribe({
    next:(res)=>{
      this.AllTrendingMovies.set(res.results);
      console.log(this.AllTrendingMovies());
      
    },

    error:(err)=>{
      console.log(err);
      
    },

    complete:()=>{
      console.log("complete");
      
    }
  })
}

}
