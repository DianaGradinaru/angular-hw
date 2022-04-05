import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PacientiComponent } from './components/pacienti/pacienti.component';
import { PacientItemComponent } from './components/pacient-item/pacient-item.component';
import { AddPacientComponent } from './components/add-pacient/add-pacient.component';
import { EditPacientComponent } from './components/edit-pacient/edit-pacient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PacientiComponent,
    PacientItemComponent,
    AddPacientComponent,
    EditPacientComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
