import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public text: Array<string> = ["","Estas preparado","Para la aventura","Pokémon"];  
  public cont_timer:number = 0;
  public flag_bg: boolean = true;
  public flag_language:number = 0;
  public read_text: Array<any>=[];
  public id_timer:any;  
  
  constructor(private router:Router){        
  }  
  
  ngOnInit(){          
    this.id_timer = setInterval(() => {
      if(this.cont_timer < this.text.length-1){  
        this.flag_bg = !this.flag_bg;      
        this.cont_timer++;        
      }else{
        clearInterval(this.id_timer);
        this.router.navigate(['home']);
      }
    },1000);
  }

  ngOnDestroy(){
    if(this.id_timer){
      clearInterval(this.id_timer);
    }
  }



}
