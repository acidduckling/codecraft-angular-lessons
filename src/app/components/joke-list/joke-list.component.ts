import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: []
})
export class JokeListComponent implements OnInit {
  jokes: Joke[] = [];

  ngOnInit() {}

  addJoke(joke) {
    this.jokes.unshift(new Joke('What did the cheese say when it looked in the mirror?', 'Hello-Me (Halloumi)'));
  }

  deleteJoke() {
    this.jokes = [];
  }
}
