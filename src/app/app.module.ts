import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './form-components/text/text.component';
import { SelectComponent } from './form-components/select/select.component';
import { TextAreaComponent } from './form-components/text-area/text-area.component';
import { SubmitComponent } from './form-components/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    SelectComponent,
    TextAreaComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
