import { HttpHeaders } from '@angular/common/http';
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
         let date1=new Date(this.dueDate)
         let obj={
           Title:this.title,
           DueDate:date1.toISOString(),
           IsTeamGoal:this.isTeamGoal
         }
        
         
         this.service.PostGoal(obj).subscribe(result=>{
           
         })
         
   }
   reset(){
           this.service.getGoals().subscribe(objs => {
              console.log(objs)
           })
           console.log("List goals")
   }
}
