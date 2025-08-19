import { Component, inject, signal } from '@angular/core';
import { Alltringingmovies } from '../services/alltringingmovies';
import { Movieapiinterface } from '../interfaces/movieapiinterface';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.html',
  styleUrl: './people.scss'
})
export class People {


path:Alltringingmovies=inject(Alltringingmovies)
pathtpeople:string=this.path.path;

constructor(private post:Alltringingmovies){}

person=signal<Movieapiinterface[]>([]);

ngOnInit(){
this.showdata();
}

showdata(){
  this.post.getdata("person").subscribe({
    next:(res)=>{
      this.person.set(res.results);
      console.log(this.person());
      
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
