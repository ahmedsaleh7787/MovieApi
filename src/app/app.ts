import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  OnInit } from '@angular/core';
import {Flowbits } from '../app/services/flowbits';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar-component/navbar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('MovieApi');


    constructor(private flowbiteService: Flowbits) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
