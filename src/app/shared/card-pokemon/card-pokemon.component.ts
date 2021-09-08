import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPokemon } from 'src/app/interfaces/info_pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input() info_pokemon:InfoPokemon;
  constructor(private router:Router) { 
    this.info_pokemon = {id:0,name:'',stats:[],url_photo:'',base_experience:0,type:'',color:''}
  }    
  ngOnInit(): void {
  }

  redirectPage(id:number){
    this.router.navigate(['/detail_pokemon',id]);
  }

}
