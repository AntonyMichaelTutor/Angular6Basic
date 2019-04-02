import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  constructor() { }
  loginFlag=false;
  maleFlag = false;
  btnName = "Login"
  femaleFlag:boolean= false;
  ngOnInit() {
  }
  genderFunction(gender:number){
    if(gender==2){
      this.femaleFlag = true;
      this.maleFlag = false;
    }else if(gender==1){
      this.maleFlag = true;
      this.femaleFlag = false;
    }
    
  }
  loginFunction(){
    this.loginFlag = !this.loginFlag;
    if(this.loginFlag)
      this.btnName = "Logout";
    else
      this.btnName = "Login"; 
  }

}
