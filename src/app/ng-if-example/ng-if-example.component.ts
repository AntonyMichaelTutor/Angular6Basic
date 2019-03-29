import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  constructor() { }

  maleFlag = false;
  femaleFlag:boolean= false;
  ngOnInit() {
  }
  genderFunction(gender:number){
    if(gender==1){
      this.femaleFlag = true;
      this.maleFlag = false;
    }else if(gender==0){
      this.maleFlag = true;
      this.femaleFlag = false;
    }
    
  }

}
