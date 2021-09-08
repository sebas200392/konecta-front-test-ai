import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService:LoaderService) {}
  
  public display_!:Observable<'open' | 'close'>; 
  public data_html:any; 
  

  ngOnInit(): void {
    this.display_ = this.loaderService.watch();        
  }

  close() {
    this.loaderService.close();        
  }

  handleClickButton(){    
    this.loaderService.close();
  }  
}
