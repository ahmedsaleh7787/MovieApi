import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Alltringingmovies {

  path: string = "https://image.tmdb.org/t/p/w500"


  constructor(private htttp: HttpClient) { }

  options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzBiMDU5MTZjYzRlOWZjYWZiYTcwYTI2ZTBjNTEwYiIsIm5iZiI6MTc1NTM5MTExMi4wNzgsInN1YiI6IjY4YTEyNDg4MjEyNmNkYjZiMDc0NGJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrS-BL2AY-HeU-CfFZku1afvWPWMCAUUJ4QP6vyyfYE'
    }
  };
  getdata(data:string): Observable<any> {
    return this.htttp.get(`https://api.themoviedb.org/3/trending/${data}/day?language=en-US`, this.options)
  }

}
