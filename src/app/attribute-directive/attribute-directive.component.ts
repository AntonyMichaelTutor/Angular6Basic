import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }
  bgColor:string = "red";
  fontSize:string = "12px";
  ngOnInit() {
  }
  changeColor(bgColor:any){
    this.bgColor = bgColor;
  }
  changeSize(fontSize:number){
    this.fontSize = fontSize+"px";
    console.log(fontSize);
  }

}
