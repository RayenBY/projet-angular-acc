import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ConferenceList } from '../../models/conference-list';
import { ListConf } from '../list-conf/list-conf';
import { UserProfile } from '../../sharedComponent/user-profile/user-profile';
import { FriendsList } from '../../sharedComponent/friends-list/friends-list';
import { Notifications } from '../../sharedComponent/notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ListConf, UserProfile, FriendsList, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  conferences = signal<Conference[]>(new ConferenceList().conferences);

  // two-way data binding avec le champ de recherche
  searchTitle = signal('');

  // conférences à venir dont le titre contient le texte recherché
  upcomingConferences(): Conference[] {
    const today = new Date();
    const search = this.searchTitle().toLowerCase();

    return this.conferences().filter(
      (conf) => conf.date >= today && conf.title.toLowerCase().includes(search),
    );
  }

  // appelée quand le composant enfant émet l'événement (register)
  register(conf: Conference): void {
    if (conf.nbParticipants < conf.maxParticipants) {
      conf.nbParticipants++;
    }
  }
}
