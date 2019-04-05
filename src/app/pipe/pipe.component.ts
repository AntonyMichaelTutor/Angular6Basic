import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  dateType = "fullDate";
  dateName = "FullDate";
  flag=true;
  jsonVal = [{"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects"}];
  constructor() { }
  dateVal ="04/05/2019";
  ngOnInit() {
  }
  changeDateFormat(){
    if(this.flag){
      this.flag = false;
      this.dateName = "Custom Date";
      this.dateType = "d/M/y";
    }else{
      this.flag = true;
      this.dateName = "FullDate";
      this.dateType = "fullDate";
    }
  }

}
