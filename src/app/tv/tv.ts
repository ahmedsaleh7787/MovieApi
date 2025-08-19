import { Component, inject, signal } from '@angular/core';
import { Alltringingmovies } from '../services/alltringingmovies';
import { Movieapiinterface } from '../interfaces/movieapiinterface';

@Component({
  selector: 'app-tv',
  imports: [],
  templateUrl: './tv.html',
  styleUrl: './tv.scss'
})
export class TV {


path:Alltringingmovies=inject(Alltringingmovies)
pathttv:string=this.path.path;

tv=signal<Movieapiinterface[]>([]);

ngOnInit(){
this.showdata();
}



showdata(){
  this.path.getdata("tv").subscribe({
    next:(res)=>{
      this.tv.set(res.results);
      
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
