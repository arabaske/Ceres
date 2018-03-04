import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  @Input() appName: string;
  currentTime: Date;

  constructor() { 
    this.currentTime = new Date();
  }

  ngOnInit() {
  }

}
