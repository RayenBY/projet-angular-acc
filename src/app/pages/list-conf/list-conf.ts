import { Component, input, output, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  // Input : la liste est envoyée par le composant parent (Home)
  conferences = input<Conference[]>([]);

  // Output : on prévient le parent quand on clique sur « S'inscrire »
  register = output<Conference>();

  // id de la conférence dont on affiche la description (0 = aucune)
  selectedId = signal(0);

  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  showDetails(id: number): void {
    if (this.selectedId() === id) {
      this.selectedId.set(0);
    } else {
      this.selectedId.set(id);
    }
  }

  onRegister(conf: Conference): void {
    this.register.emit(conf);
  }
}
