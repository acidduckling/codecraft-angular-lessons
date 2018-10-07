import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-joke',
  templateUrl: 'joke.component.html',
  styles: []
})
export class JokeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input()
  joke: Joke;

  constructor() {
    console.log('new - data is %s', this.joke);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges - data is %s', this.joke);

    for (const key in changes) {
      console.log(`${key} changed.
        Current: ${changes[key].currentValue}
        Previous: ${changes[key].previousValue}
      `);
    }
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log('ngOnInit: Data is %s', this.joke);
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change
    // detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }
}
