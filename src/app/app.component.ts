import { Component } from '@angular/core';

@Component({
  selector: 'joseline',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
