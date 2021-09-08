import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InfoPokemon } from 'src/app/interfaces/info_pokemon';
import { LoaderService } from 'src/app/services/loader.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('scrollMe',{ static: true}) myScrollContainer!: ElementRef;
  public flag_view_btn_scroll:boolean = false;
  public pokemons:any[] = [];
  public info_pokemons:InfoPokemon[] = [];
  public colors_by_type:any = {bug:"#A8B820",dark:"#7A5848",dragon:"#7860E0",electric:"#F8D030",fairy:"#E79FE7",fighting:"#A05038",
    fire:"#F05030",flying:"#98A8F0",ghost:"#6060B0",grass:"#78C850",ground:"#E9D6A4",ice:"#58C8E0",normal:"#A8A090",posion:"#B058A0",
    psychic:"#F870A0",rock:"#B8A058",steell:"#A8A8C0",water:"#3899F8",default:"#57bbe6"
  };
  constructor(private pokemonService:PokemonService,private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.open();
    this.pokemonService.getPokemons().subscribe((response:any)=>{
      response.results.forEach(((pokemon:any) =>{
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((info_pokemon:any)=>{
          this.pokemons.push(info_pokemon);
          this.info_pokemons.push(this.fillInfoPokemon(info_pokemon));
          this.loaderService.close();
          //console.log(this.info_pokemons);
        });
      }));
    })
  }

  fillInfoPokemon(data:any){
    try{      
      let info: InfoPokemon = {id:0,name:'',stats:[],url_photo:'',base_experience:0,type:'',color:''};
      info.name = data.name;
      info.url_photo = data.sprites.other.dream_world.front_default;
      info.id = data.id;
      info.base_experience = data.base_experience;
      info.type = data.types[0].type.name;
      info.stats = data.stats.slice(0,3);
      if(this.colors_by_type.hasOwnProperty(info.type)){
        info.color = this.colors_by_type[info.type];
      }else{
        info.color = this.colors_by_type.default;
      }
      return info;
    }catch(e){      
      return {id:0,name:'',stats:[],url_photo:'',base_experience:0,type:'',color:''};
    }
    
  }

  goUp(event:any){
    if(event.target.scrollTop > 0){
      this.flag_view_btn_scroll = true;
    }else{
      this.flag_view_btn_scroll = false;
    }
    
  }

  scrollToTop(){             
    this.myScrollContainer.nativeElement.scrollTo({left: 0 , top:0, behavior: 'auto'});               
  }

  

}
