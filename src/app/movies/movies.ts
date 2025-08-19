import { Component, inject, signal } from '@angular/core';
import { Alltringingmovies } from '../services/alltringingmovies';
import { Movieapiinterface } from '../interfaces/movieapiinterface';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {

path:Alltringingmovies=inject(Alltringingmovies)
pathtmovies:string=this.path.path;


constructor(private post:Alltringingmovies){}

Movies=signal<Movieapiinterface[]>([]);

ngOnInit(){
this.showdata();
}



showdata(){
  this.post.getdata("movie").subscribe({
    next:(res)=>{
      this.Movies.set(res.results);
      
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
