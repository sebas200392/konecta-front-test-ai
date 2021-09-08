import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'konecta-front-test-ai';
  constructor(private el:ElementRef){    
    let vh = window.innerHeight * 0.01;
    this.el.nativeElement.style.setProperty('--vh',vh+'px');   
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {        
    let vh = event.target.innerHeight * 0.01;
    this.el.nativeElement.style.setProperty('--vh',vh+'px');    
  }
}
