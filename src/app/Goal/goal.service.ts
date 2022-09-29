import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(
    private http:HttpClient
  ) { }

  PostGoal(obj:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return(this.http.post<any>(`/goal/add`,
     obj,
      {headers: headers}
     ))
  }

  getGoals(){
     return(this.http.get<any>(`/goals`))
  }
}
