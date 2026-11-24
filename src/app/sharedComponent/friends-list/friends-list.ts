import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  // two-way data binding : les trois champs sont liés au même signal
  userName = signal('Ahmed');

  friends = signal<string[]>(['Sami', 'Sarra', 'Amine']);
}
