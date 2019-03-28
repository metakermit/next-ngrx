import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styles: []
})
export class TextAreaComponent implements OnInit {
  public value: string;

  constructor() { }

  ngOnInit() {
  }

}
