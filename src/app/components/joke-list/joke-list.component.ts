import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ElementRef,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { Joke } from '../../classes/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: []
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(JokeComponent)
  jokeViewChild: JokeComponent;

  @ViewChildren(JokeComponent)
  jokeViewChildren: QueryList<JokeComponent>;

  @ViewChild('header')
  headerEl: ElementRef;

  @ContentChild(JokeComponent)
  jokeContentChild: JokeComponent;

  jokes = [
    new Joke('What did the cheese say when it looked in the mirror?', 'Hello-Me (Halloumi)'),
    new Joke(
      'What kind of cheese do you use to disguise a small horse?',
      'Mask-a-pony (Mascarpone)'
    )
  ];

  constructor() {
    console.log('new - jokeViewChild is %s', this.jokeViewChild);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - jokeViewChild is %s', this.jokeViewChild);

    const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log('ngAfterViewInit - headerEl is %s', this.headerEl);
    this.headerEl.nativeElement.textContent = 'Best joke machine!';

    console.log('ngAfterViewInit - jokeContentChild is %s', this.jokeContentChild);
  }

  ngAfterContentInit() {
    console.log('ngAFterContentInit - jokeContentChild is %s', this.jokeContentChild);
  }

  ngOnInit() {}

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}
