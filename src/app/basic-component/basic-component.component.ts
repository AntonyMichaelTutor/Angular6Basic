import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.css']
})
export class BasicComponentComponent implements OnInit {

  

  ngOnInit() {
  }
  title = 'Angular 6';
  imgURL = "../assets/img1.jpg";
  event = "click";
  msg = "";
  showMsg():void{
    alert("hai");
  }
  backChange(type:any):void{
      if(type==1){
        this.imgURL = "../assets/img1.jpg";
      }else{
        this.imgURL = "../assets/img2.png";
      }
  }
  printValue(msg:string):void{
    this.msg = msg;
  }

}
