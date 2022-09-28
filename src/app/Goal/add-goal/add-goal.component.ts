import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal.service';

@Component({
  selector: 'NewGoal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  title:string 
  dueDate:Date
  isTeamGoal:string="T"
  constructor(
    private service:GoalService
  ) { }

  ngOnInit(): void {
  }
   submit(){
         let obj={
           'title':this.title,
           'dueDate':this.dueDate,
           'isTeamGoal':this.isTeamGoal
         }
         console.log(obj)
         this.service.PostGoal(obj).subscribe(result=>{
            console.log(result)
         })
   }
   reset(){

   }
}
