import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {


  constructor(private router:Router,private route:ActivatedRoute,private pokemonService:PokemonService,private loaderService:LoaderService) { }

  public pokemon:any;

  async ngOnInit(){
    try{
      this.loaderService.open();
      if(this.route.snapshot.params){
        if(this.route.snapshot.params.hasOwnProperty("id")){          
          this.pokemon = await this.pokemonService.getInfoPokemon(this.route.snapshot.params["id"]).toPromise();          
          this.loaderService.close();
        }else{
          this.loaderService.close();
          this.router.navigate(['home'])
        }
      }else{
        this.loaderService.close();
        this.router.navigate(['home'])
      }      
    }catch(e:any){      
      this.loaderService.close();
      if(e.hasOwnProperty("name") && e.hasOwnProperty("status")){
        if(e.status == 404){
          this.router.navigate(['404']);
        }        
      }else{
        this.router.navigate(['home']);
      }      
    } 
  }

  returnPage(){
    this.router.navigate(['home'])
  }

}
