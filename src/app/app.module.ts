import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './form-components/text/text.component';
import { SelectComponent } from './form-components/select/select.component';
import { TextAreaComponent } from './form-components/text-area/text-area.component';
import { SubmitComponent } from './form-components/submit/submit.component';
import { FieldComponent } from './form-components/field.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    SelectComponent,
    TextAreaComponent,
    SubmitComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SelectComponent,
    SubmitComponent,
    TextAreaComponent,
    TextComponent
  ]
})
export class AppModule {}
