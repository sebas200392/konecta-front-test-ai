import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:IntroComponent},
  {path: 'home',component:HomeComponent},
  {path:'detail_pokemon/:id',component:DetailPokemonComponent},
  {path:'404',component:NotFoundComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class PagesRoutingModule{}