import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { NewCharacterComponent } from './components/new-character/new-character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharacterListComponent,
    CharacterSheetComponent,
    NewCharacterComponent,
    CharacterDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
