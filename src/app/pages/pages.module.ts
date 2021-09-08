import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailPokemonComponent,
    IntroComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
