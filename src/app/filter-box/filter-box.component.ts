import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  @Input() fields: string[];
  @Output() filtered =  new EventEmitter<string[]>();

  public filters: string[];
  public availableFilters: string[];

  constructor() { }

  ngOnInit() {
    this.availableFilters = this.fields.slice();
    this.filters = new Array();
  }

  public addFilter(value: string){
    if(! this.filters.includes(value)){
      this.filters.push(value);
    }

    var index = this.availableFilters.indexOf(value);

    if(index !== -1){
      this.availableFilters.splice(index, 1);
    }

    this.filtered.emit(this.filters);
  }

  public removeFilter(value: string){
    var index = this.filters.indexOf(value);

    if(index !== -1){
      this.filters.splice(index, 1);
    }

    this.availableFilters.push(value);

    this.filtered.emit(this.filters);
  }

}
