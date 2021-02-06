import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharacterListComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
