import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'pies',
  template: `
  <h3>Here are my favorite pies!</h3>
  <div *ngFor="let currentPie of favoritePies">
    <p>{{currentPie}}</p>
  </div>

  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];

}
