import { Routes } from '@angular/router';
import { AllTrending } from './all-trending/all-trending';
import { Movies } from './movies/movies';
import { People } from './people/people';
import { TV } from './tv/tv';

export const routes: Routes = [

    {path:"",redirectTo:"All-Trending",pathMatch:'full'}, 
    {path:'All-Trending', component:AllTrending},
    {path:"Movies",component:Movies},
    {path:"People" ,component:People},
    {path:"TV" ,component:TV}

];
