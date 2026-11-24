import { Conference } from './conference';

// La liste des conférences est définie dans la classe ConferenceList
export class ConferenceList {
  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Summit',
      description: 'Découverte des nouveautés d’Angular 21 : signals, control flow et composants standalone.',
      date: new Date('2027-01-14'),
      place: 'Tunis',
      maxParticipants: 60,
      nbParticipants: 22,
    },
    {
      id: 2,
      title: 'Atelier Signals',
      description: 'Atelier pratique : signal(), set(), update(), input() et output().',
      date: new Date('2027-02-03'),
      place: 'Ariana',
      maxParticipants: 25,
      nbParticipants: 18,
    },
    {
      id: 3,
      title: 'Journée du Web',
      description: 'Conférences sur les tendances du développement web moderne.',
      date: new Date('2027-03-21'),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40,
    },
    {
      // conférence déjà passée : elle ne doit pas apparaître dans la liste « à venir »
      id: 4,
      title: 'Hackathon IA',
      description: 'Hackathon de 24h autour de l’intelligence artificielle.',
      date: new Date('2025-10-10'),
      place: 'Sfax',
      maxParticipants: 80,
      nbParticipants: 75,
    },
  ];
}
