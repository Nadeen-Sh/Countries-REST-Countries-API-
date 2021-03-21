import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-select-region-filter',
  templateUrl: './select-region-filter.component.html',
  styleUrls: ['./select-region-filter.component.css']
})
export class SelectRegionFilterComponent implements OnInit {
  
  @Input()
  values?: string[];

  @Input()
  value?: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChange.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 
showAll(){
  window.location.reload();
  
}
}
