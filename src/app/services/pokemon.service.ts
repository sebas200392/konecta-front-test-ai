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

  getPokemons(limit:number,offset:number){    
    return this.http.get(`${this.url_api}?limit=${limit}&offset=${offset}`);
  }

  getInfoPokemon(identification:string){
    return this.http.get(this.url_api+'/'+identification);
  }
  

}
