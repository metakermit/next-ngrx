import { Component } from '@angular/core';
import source from './source';
import { FormField, FormFieldset } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'next-ngrx';
  public sourceJson: string = source;
  public formTitle: { [key: string]: string };
  public formFieldsets: FormFieldset[];
  private sourceSchema: any = {};

  ngOnInit() {
    this.reinitializeForm();
  }

  private reinitializeForm() {
    // Load and parse the data
    this.sourceSchema = JSON.parse(this.sourceJson);
    const formSchema = this.sourceSchema.forms
      ? this.sourceSchema.forms[0]
      : null;

    if (!formSchema) {
      return;
    }

    // Initialize the data
    this.formTitle = formSchema.title;
    this.formFieldsets = formSchema.fieldsets.map(
      fieldset =>
        new FormFieldset(
          fieldset.title,
          fieldset.items.map(
            field => new FormField(field.key, field.title, field.type, field)
          )
        )
    );
  }
}
