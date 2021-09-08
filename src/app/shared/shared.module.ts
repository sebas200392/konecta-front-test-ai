import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';



@NgModule({
  declarations: [
    CardPokemonComponent,
    LoaderComponent,    
    HeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardPokemonComponent,
    LoaderComponent,    
    HeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
