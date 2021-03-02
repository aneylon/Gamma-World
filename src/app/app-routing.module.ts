import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NewCharacterComponent } from './components/new-character/new-character.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonalityGeneratorComponent } from './components/personality-generator/personality-generator.component';
import { DiscussionListComponent } from './components/discussion-list/discussion-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'newcharacter', component: NewCharacterComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'personality', component: PersonalityGeneratorComponent },
  { path: 'discussion', component: DiscussionListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
