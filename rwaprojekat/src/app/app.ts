import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PartComponent } from './components/part/part.component';

@Component({
  selector: 'app-root',
  imports: [ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rwaprojekat');
}
