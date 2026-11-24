import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './sharedComponent/header/header';
import { Navbar } from './sharedComponent/navbar/navbar';
import { Footer } from './sharedComponent/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
