import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menu = signal<string[]>(['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);

  // le lien actuellement sélectionné
  activeLink = signal('Accueil');

  selectLink(link: string): void {
    this.activeLink.set(link);
  }
}
