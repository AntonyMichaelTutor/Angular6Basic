import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  students: any[] =   
  [  
    { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA' },  
    { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA' },  
    { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech' },  
    { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech' },  
  ]; 
  ngOnInit() {
  }
  checkFlag:boolean = false;
  showDropDown():void{
    this.checkFlag = !this.checkFlag;
  }

}
