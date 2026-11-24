import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal<string[]>([
    'Nouvelle conférence ajoutée : Angular 21 Summit',
    'Votre inscription à l’Atelier Signals est confirmée',
  ]);

  showNotifications = signal(false);

  toggle(): void {
    this.showNotifications.update((value) => !value);
  }
}
