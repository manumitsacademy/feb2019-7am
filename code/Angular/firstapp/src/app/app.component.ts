import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  firstname = "praveen";
  lastname = 'gubbala';
  location = 'pune';
  tasks=[];
  //methods
  getFullName(){
    console.log(this.firstname,this.lastname)
  }
  add(firstnumber,secondnumber){
    console.log(parseInt(firstnumber)+parseInt(secondnumber))
  }
  addTask(t){
    this.tasks.push(t);
    console.log(this.tasks);
  }
}
