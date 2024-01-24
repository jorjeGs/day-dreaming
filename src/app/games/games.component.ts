import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavouriteEvent.emit(gameName);
    alert('Changed ' + gameName + ' to favorite game of ' + this.username);
  }

games = [
  {
    id: 1,
    name: 'Super Mario Bros',
    description: 'Super Mario Bros is a platform video game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., and the first in the Super Mario series of platformers, it was released in Japan in 1985 for the Famicom, and in North America and Europe for the Nintendo Entertainment System (NES) in 1985 and 1987 respectively. Players control Mario, or his brother Luigi in the multiplayer mode, as they travel the Mushroom Kingdom to rescue Princess Toadstool from the antagonist, Bowser.',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
    rating: 4.5
  },
  {
    id: 2,
    name: 'The Legend of Zelda',
    description: 'The Legend of Zelda is an action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo. The series gameplay incorporates action-adventure and elements of action RPG games.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28reversed%29.jpg',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Metroid',
    description: 'Metroid is a science fiction action game franchise created by Nintendo. The series is primarily produced by the company\'s first-party developers Nintendo R&D1 and Retro Studios, although some games have been handled by other developers, including Fuse Games, Team Ninja, Next Level Games, and MercurySteam.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Metroid_box_art.jpg',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Donkey Kong',
    description: 'Donkey Kong is an arcade game released by Nintendo in 1981. An early example of the platform game genre, the gameplay focuses on maneuvering the main character across a series of platforms while dodging and jumping over obstacles. In the game, Mario (originally named Mr. Video and then Jump',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Donkey_Kong_1981_flyer.jpg',
    rating: 4.8
  }
]
}

