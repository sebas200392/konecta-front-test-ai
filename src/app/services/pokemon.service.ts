import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url_api:string;
  constructor(private http:HttpClient) { 
    this.url_api = environment.URL_API
  }

  getPokemons(){    
    return this.http.get(this.url_api+'?limit=50&offset=10');
  }

  getInfoPokemon(identification:string){
    return this.http.get(this.url_api+'/'+identification);
  }
  

}
