import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service'

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { NewCharacterComponent } from './components/new-character/new-character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonalityGeneratorComponent } from './components/personality-generator/personality-generator.component';
import { DiscussionListComponent } from './components/discussion-list/discussion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharacterListComponent,
    CharacterSheetComponent,
    NewCharacterComponent,
    CharacterDetailComponent,
    PageNotFoundComponent,
    PersonalityGeneratorComponent,
    DiscussionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
