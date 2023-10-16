import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  // actions: string[] = [];
  // Um deutlich zu mache, welche Art von Daten in diesem Signal (generische Funktion) gespeichert werden, wird in die spitzen Klammern der Typ geschrieben.
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.update((oldCounter) => oldCounter +1);

    // Das Signal wird erneut als Funktion aufgerufen, um den alten Wert zu bekommen.
    this.counter.set(this.counter() +1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));

    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter -1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);

    // this.actions.push('DECREMENT');
  }
}
