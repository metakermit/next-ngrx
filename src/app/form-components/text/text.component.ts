import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styles: []
})
export class TextComponent implements OnInit {
  public value: string;

  constructor() { }

  ngOnInit() {
  }

}
