import { Component } from '@angular/core';
import { Joke } from './classes/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  joke: Joke = new Joke(
    'A kid threw a lump of cheddar at me',
    'I thought ‘That’s not very mature’'
  );
}
