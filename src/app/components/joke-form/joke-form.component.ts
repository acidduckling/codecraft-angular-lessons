import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  @Output()
  jokeCreated = new EventEmitter<Joke>();

  constructor() {}

  ngOnInit() {}

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
