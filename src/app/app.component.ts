import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  name:string ="Mac";
  score:string ="44";

  student = {
    name:"Kwang",
    studentID : "5921602795",
    weight : 51,
    height : 171
  }
  studentlist = [{
    name:"M1",
    studentID : "5921602795",
    weight : 51,
    height : 171
  },
  {
    name:"M2",
    studentID : "5921602795",
    weight : 51,
    height : 171
  },
  {
    name:"M3",
    studentID : "5921602795",
    weight : 51,
    height : 171
  }





]
  constructor(){
  this.studentlist.map((object,index)=>{
  let obj:any= object;
  obj.bmi = object.weight/((object.height/100)*(object.height/100))
  return obj;
 
  
    let student ="student in function";
    console.log(this.studentlist);
    console.log(student);
  })}


}
