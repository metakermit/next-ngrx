import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Write } from './text.actions';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styles: []
})
export class TextComponent implements OnInit {
  public value: string;

  constructor(private store: Store<{ text: string }>) {}

  ngOnInit() {}

  onChange() {
    this.store.dispatch(new Write({ text: this.value }));
  }
}
