import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 username = 'Jorge';
 image = 'https://github.com/jorjegs.png';
 isLogged = false;
 favGame = '';

 getFavGame(gameName: string) {
  this.favGame = gameName;
 }

 greet() {
  alert('Hello ' + this.username);
 }

 login() {
  this.isLogged = true;
 }
}
