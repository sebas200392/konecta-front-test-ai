import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private display = new BehaviorSubject<'open' | 'close'>('close');
  private id_timer:any;  

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";  
  }

  close() {
    this.id_timer = setInterval(() => {      
      this.display.next('close');
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      clearInterval(this.id_timer);
    },2500);    
  }
}
