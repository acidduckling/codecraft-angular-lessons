import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-joke',
  templateUrl: 'joke.component.html',
  styles: []
})
export class JokeComponent implements OnInit {
  @Input()
  joke: Joke;

  constructor() {}
  ngOnInit() {}
}
