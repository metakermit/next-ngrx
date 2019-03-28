import { Component } from '@angular/core';
import source from './source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'next-ngrx';

  public sourceJson: string = source;
}
