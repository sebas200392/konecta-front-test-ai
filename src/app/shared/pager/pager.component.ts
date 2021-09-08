import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() total_items: number = 0;

  public current_page:number = 1;
  public pages:Array<number>=[];  
  public total_pages:number = 0;
  public max_pages:number = 5;
  @Output() changeIndexPage = new EventEmitter<any>();  
  constructor() { }
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.total_items.currentValue != changes.total_items.previousValue) {
      this.total_items = changes.total_items.currentValue;      
      let response_control_pages = this.controlPagination(this.total_items,this.current_page,10,this.max_pages);
      this.pages = response_control_pages.pages;
      this.total_pages = response_control_pages.total_pages;

    }

  }

  controlPagination(total_items: number, current_page: number = 1, page_size: number = 10, max_pages: number = 5): any {
    let total_pages = Math.ceil(total_items / page_size);

    if (current_page < 1) {
      current_page = 1;
    } else if (current_page > total_pages) {
      current_page = total_pages;
    }

    let start_page: number, end_page: number;
    if (total_pages <= max_pages) {
      start_page = 1;
      end_page = total_pages;
    } else {
      let max_pages_before_current_page = Math.floor(max_pages / 2);
      let max_pages_after_current_page = Math.ceil(max_pages / 2) - 1;
      if (current_page <= max_pages_before_current_page) {
        start_page = 1;
        end_page = max_pages;
      } else if (current_page + max_pages_after_current_page >= total_pages) {
        start_page = total_pages - max_pages + 1;
        end_page = total_pages;
      } else {
        start_page = current_page - max_pages_before_current_page;
        end_page = current_page + max_pages_after_current_page;
      }
    }
    let start_index = (current_page - 1) * page_size;
    let end_index = Math.min(start_index + page_size - 1, total_items - 1);
    let pages = Array.from(Array((end_page + 1) - start_page).keys()).map(i => start_page + i);
    return {
      total_items: total_items,
      current_page: current_page,
      page_size: page_size,
      total_pages: total_pages,
      start_page: start_page,
      end_page: end_page,
      start_index: start_index,
      end_index: end_index,
      pages: pages
    };
  }

  changePage(page:number){
    this.current_page = page;
    let response_control_pages = this.controlPagination(this.total_items,this.current_page,10,this.max_pages);
    this.pages = response_control_pages.pages;
    this.changeIndexPage.emit({start_index:response_control_pages.start_index,end_index:response_control_pages.end_index});
  }

  controlPage(state:string){
    let response_control_pages = this.controlPagination(this.total_items,this.current_page,10,this.max_pages);
    let aux_page = this.current_page;
    if(state == "prev"){
      aux_page -= 1;
    }else{
      aux_page += 1;
    }
    
    if(aux_page < 1){
      aux_page = 1;
    }

    if(aux_page > response_control_pages.total_pages){
      aux_page = response_control_pages.total_pages;
    }

    this.current_page = aux_page;
    response_control_pages = this.controlPagination(this.total_items,this.current_page,10,this.max_pages);
    this.pages = response_control_pages.pages;
    this.changeIndexPage.emit({start_index:response_control_pages.start_index,end_index:response_control_pages.end_index});    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {        
    if(event.target.innerWidth <= 400){
      this.max_pages = 2;            
    }
    if(event.target.innerWidth <= 280){
      this.max_pages = 1;      
    }
    if(event.target.innerWidth > 400){
      this.max_pages = 5;      
    }
    this.pages = this.controlPagination(this.total_items,this.current_page,10,this.max_pages).pages;
  }
}


