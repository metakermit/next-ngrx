import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { FormField } from '../types';

import {
  SelectComponent,
  SubmitComponent,
  TextComponent,
  TextAreaComponent
} from '../form-components';

@Component({
  selector: 'app-field',
  template: '<ng-container #entry></ng-container>',
  styles: []
})
export class FieldComponent implements AfterContentInit {
  @Input() field: FormField;

  @ViewChild('entry', { read: ViewContainerRef })
  entry: ViewContainerRef;

  private component: any;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    // Dynamically create the component
    const factory = this.resolver.resolveComponentFactory(this.componentName);
    this.component = this.entry.createComponent(factory).instance;
    this.component.field = this.field;
  }

  get componentName(): any {
    switch (this.field.type) {
      case 'select':
        return SelectComponent;
      case 'text':
        return TextComponent;
      case 'textArea':
        return TextAreaComponent;
      case 'submit':
        return SubmitComponent;
    }
  }
}
