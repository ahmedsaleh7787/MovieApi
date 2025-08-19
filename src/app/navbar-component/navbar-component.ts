import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Movies } from '../movies/movies';
import { AllTrending } from '../all-trending/all-trending';
import { People } from '../people/people';
import { TV } from '../tv/tv';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {

}
//scss study+ search + api + signal + tailwind + flowbite + router +dark +directives study +loader